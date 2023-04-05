import { FieldValues } from 'react-hook-form';

export function applyToLocalStorage(key: string, data: FieldValues[] | string) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key: string) {
  const parsedItem = localStorage.getItem(key);
  if (parsedItem) {
    return JSON.parse(parsedItem);
  }
  return '';
}
