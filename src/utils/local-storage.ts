import { FieldValues } from 'react-hook-form';

export function applyToLocalStorage(key: string, data: FieldValues[] | string) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '');
}
