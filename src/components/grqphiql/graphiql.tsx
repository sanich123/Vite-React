import React, { useRef } from 'react';
import './graphiql.scss';
interface MouseEvent {
  clientX: number;
  clientY: number;
}
export default function GraphiQl() {
  const parent = useRef<HTMLDivElement | null>(null);
  const resizer = useRef<HTMLDivElement | null>(null);
  const leftSide = useRef<HTMLDivElement | null>(null);
  const rightSide = useRef<HTMLDivElement | null>(null);
  const up = useRef<HTMLDivElement | null>(null);

  let x = 0;
  let y = 0;
  let leftWidth = 0;
  let upHeight = 0;

  function mouseMoveHandler({ clientX }: MouseEvent) {
    if (resizer.current) {
      const direction = resizer.current.getAttribute('data-direction') || 'horizontal';
      switch (direction) {
        case 'vertical':
      }
    }

    const dx = clientX - x;
    // const dy = e.clientY - y;
    if (parent.current && leftSide.current && resizer.current && rightSide.current) {
      const { width } = parent.current.getBoundingClientRect();
      const newLeftWidth = ((leftWidth + dx) * 100) / width;
      leftSide.current.style.width = `${newLeftWidth}%`;
      resizer.current.style.cursor = 'col-resize';
      leftSide.current.style.userSelect = 'none';
      leftSide.current.style.pointerEvents = 'none';
      rightSide.current.style.userSelect = 'none';
      rightSide.current.style.pointerEvents = 'none';
    }
    document.body.style.cursor = 'col-resize';
    console.log(resizer.current?.getAttribute('data-direction'));
  }

  function mouseUpHandler() {
    if (resizer.current && leftSide.current && rightSide.current) {
      resizer.current.style.removeProperty('cursor');
      leftSide.current.style.removeProperty('user-select');
      leftSide.current.style.removeProperty('pointer-events');
      rightSide.current.style.removeProperty('user-select');
      rightSide.current.style.removeProperty('pointer-events');
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
    if (leftSide.current instanceof HTMLDivElement) {
      leftWidth = leftSide.current.getBoundingClientRect().width;
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

  return (
    <div className="wrapper" ref={parent}>
      <div ref={leftSide}>Left</div>
      <div className="resizer" id="dragMe" data-direction="horizontal" ref={resizer} onMouseDown={mouseDownHandler} />

      <div className="wrapper-right">
        <div>Top</div>
        <div className="resizer" data-direction="vertical" ref={resizer} onMouseDown={mouseDownHandler} />
        <div className="bottom">Bottom</div>
      </div>
    </div>
  );
}
