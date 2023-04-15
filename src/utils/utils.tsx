import { SetStateBoolean } from './types/types';

export function setEscListener(setIsShowMore: SetStateBoolean) {
  return document.addEventListener(
    'keydown',
    ({ code }) => {
      if (code === 'Escape') {
        setIsShowMore(false);
      }
    },
    { once: true }
  );
}
