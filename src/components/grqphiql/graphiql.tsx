import React, { useRef } from 'react';
import './graphiql.scss';

export default function GraphiQl() {
  const parent = useRef<HTMLDivElement | null>(null);
  const resizer = useRef<HTMLDivElement | null>(null);
  const leftSide = useRef<HTMLDivElement | null>(null);
  const rightSide = useRef<HTMLDivElement | null>(null);

  let x = 0;
  let y = 0;
  let leftWidth = 0;
  const mouseMoveHandler = function (e: MouseEvent) {
    const dx = e.clientX - x;
    // const dy = e.clientY - y;
    console.log(parent.current, leftSide.current);
    if (parent.current && leftSide.current) {
      const newLeftWidth = ((leftWidth + dx) * 100) / parent.current.getBoundingClientRect().width;
      console.log(newLeftWidth);
      leftSide.current.style.width = `${newLeftWidth}%`;
    }
  };
  return (
    <div className="wrapper" ref={parent}>
      <div ref={leftSide}>Left</div>
      <div
        className="resizer"
        id="dragMe"
        ref={resizer}
        onMouseDown={({ clientX, clientY }) => {
          x = clientX;
          y = clientY;
          if (leftSide.current instanceof HTMLDivElement) {
            leftWidth = leftSide.current.getBoundingClientRect().width;
          }
          document.addEventListener('mousemove', mouseMoveHandler);
          // document.addEventListener('mouseup', mouseUpHandler);
        }}
      />

      <div ref={rightSide}>Right</div>
    </div>
  );
}
