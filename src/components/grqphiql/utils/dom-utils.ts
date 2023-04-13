import { MouseEvent as MouseEventReact, RefObject } from 'react';

export function cursorAdder(e: MouseEventReact) {
  if (e.target instanceof HTMLDivElement) {
    const direction = e.target.getAttribute('data-direction');
    e.target.style.cursor = `${direction === 'horizontal' ? 'col' : 'row'}-resize`;
  }
}
export function cursorRemover(e: MouseEventReact) {
  if (e.target instanceof HTMLDivElement) {
    e.target.style.cursor = 'none';
  }
}
type setOrRemoveDocumentListenersProps = {
  mouseMoveHandler: (arg: MouseEvent) => void;
  mouseUpHandler: (arg: MouseEvent) => void;
  action: string;
};
export function setOrRemoveDocumentListeners({ mouseMoveHandler, mouseUpHandler, action }: setOrRemoveDocumentListenersProps) {
  if (action === 'set') {
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  } else {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }
}

export function removeCursorProperty(resizer: RefObject<HTMLDivElement>) {
  if (resizer.current) {
    resizer.current.style.removeProperty('cursor');
  }
  document.body.style.removeProperty('cursor');
}
