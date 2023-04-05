import { LocalStorageKeys } from './const/const';
import { applyToLocalStorage } from './local-storage';
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

export function setBeforeUnloadListener(searchString: string) {
  return window.addEventListener(
    'beforeunload',
    () => {
      applyToLocalStorage(LocalStorageKeys.searchValue, searchString);
    },
    { once: true }
  );
}
