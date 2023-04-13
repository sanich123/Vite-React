import React, { MouseEvent as MouseEventReact } from 'react';
import { cursorAdder, cursorRemover, removeCursorProperty, setOrRemoveDocumentListeners } from './utils/dom-utils';
import './graphiql.scss';
import { useGetRefs } from './hooks/useGetRefs';

export default function GraphiQl() {
  const { parent, resizer, leftSide, up } = useGetRefs();
  let x = 0;
  let y = 0;
  let leftWidth = 0;
  let upHeight = 0;

  function mouseMoveHandler({ target, clientX, clientY }: MouseEvent) {
    const dx = clientX - x;
    const dy = clientY - y;
    if (resizer.current && parent.current && up.current && leftSide.current) {
      if (target instanceof HTMLDivElement) {
        const direction = target.getAttribute('data-direction');
        const colOrRow = direction === 'horizontal' ? 'col' : 'row';
        const { width, height } = parent.current.getBoundingClientRect();
        if (direction === 'vertical') {
          up.current.style.height = `${((upHeight + dy) * 100) / height}%`;
        } else {
          leftSide.current.style.width = `${((leftWidth - dx) * 100) / width}%`;
        }
        resizer.current.style.cursor = `${colOrRow}-resize`;
        document.body.style.cursor = `${colOrRow}-resize`;
      }
    }
  }

  function mouseUpHandler() {
    removeCursorProperty(resizer);
    setOrRemoveDocumentListeners({ mouseMoveHandler, mouseUpHandler, action: 'remove' });
  }

  function mouseDownHandler({ clientX, clientY }: MouseEventReact) {
    x = clientX;
    y = clientY;
    if (up.current) {
      upHeight = up.current.getBoundingClientRect().height;
    }
    if (leftSide.current) {
      leftWidth = leftSide.current.getBoundingClientRect().width;
    }
    setOrRemoveDocumentListeners({ mouseMoveHandler, mouseUpHandler, action: 'set' });
  }

  return (
    <div className="wrapper" ref={parent} onMouseUp={mouseUpHandler}>
      <div className="wrapper-right">
        <input type="textarea" className="topSide" placeholder="You can type your graphiql requests here" ref={up} />
        <div
          className="resizer"
          data-direction="vertical"
          ref={resizer}
          onMouseDown={mouseDownHandler}
          onMouseEnter={cursorAdder}
          onMouseLeave={cursorRemover}
        />
        <input type="textarea" className="bottomSide" placeholder="You can type your variables for requests here" />
      </div>
      <div
        className="resizer"
        data-direction="horizontal"
        ref={resizer}
        onMouseDown={mouseDownHandler}
        onMouseEnter={cursorAdder}
        onMouseLeave={cursorRemover}
      />
      <div className="leftSide" ref={leftSide}>
        Right
      </div>
    </div>
  );
}
