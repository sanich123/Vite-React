import { MouseEvent } from 'react';

export function cursorAdder(e: MouseEvent) {
  if (e.target instanceof HTMLDivElement) {
    const direction = e.target.getAttribute('data-direction');
    e.target.style.cursor = `${direction === 'horizontal' ? 'col' : 'row'}-resize`;
  }
}
export function cursorRemover(e: MouseEvent) {
  if (e.target instanceof HTMLDivElement) {
    e.target.style.cursor = 'none';
  }
}
