import React, { useRef, MouseEvent } from 'react';
import { cursorAdder, cursorRemover } from './utils/dom-utils';
import './graphiql.scss';

export default function GraphiQl() {
  const parent = useRef<HTMLDivElement | null>(null);
  const resizer = useRef<HTMLDivElement | null>(null);
  const leftSide = useRef<HTMLDivElement | null>(null);
  const up = useRef<HTMLDivElement | null>(null);

  let x = 0;
  let y = 0;
  let leftWidth = 0;
  let upHeight = 0;

  function mouseMoveHandler(e: any) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    if (resizer.current && parent.current && up.current) {
      if (e.target instanceof HTMLDivElement) {
        const direction = e.target.getAttribute('data-direction');
        if (direction === 'vertical') {
          const h = ((upHeight + dy) * 100) / parent.current.getBoundingClientRect().height;
          up.current.style.height = `${h}%`;
          resizer.current.style.cursor = 'row-resize';
          document.body.style.cursor = 'row-resize';
        }
        if (direction === 'horizontal') {
          if (leftSide.current) {
            const { width } = parent.current.getBoundingClientRect();
            const newLeftWidth = ((leftWidth - dx) * 100) / width;
            leftSide.current.style.width = `${newLeftWidth}%`;
            resizer.current.style.cursor = 'col-resize';
            leftSide.current.style.userSelect = 'none';
            leftSide.current.style.pointerEvents = 'none';
            document.body.style.cursor = 'col-resize';
          }
        }
      }
    }
  }

  function mouseUpHandler() {
    if (resizer.current && leftSide.current) {
      resizer.current.style.removeProperty('cursor');
      leftSide.current.style.removeProperty('user-select');
      leftSide.current.style.removeProperty('pointer-events');
    }
    document.body.style.removeProperty('cursor');
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  function mouseDownHandler({ clientX, clientY }: MouseEvent) {
    x = clientX;
    y = clientY;
    if (up.current) {
      upHeight = up.current.getBoundingClientRect().height;
    }
    if (leftSide.current) {
      leftWidth = leftSide.current.getBoundingClientRect().width;
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }
  return (
    <div className="wrapper" ref={parent}>
      <div className="wrapper-right">
        <div className="topSide" ref={up}>
          Top
        </div>
        <div
          className="resizer"
          data-direction="vertical"
          ref={resizer}
          onMouseDown={mouseDownHandler}
          onMouseEnter={cursorAdder}
          onMouseLeave={cursorRemover}
        />
        <div className="bottomSide">Bottom</div>
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
