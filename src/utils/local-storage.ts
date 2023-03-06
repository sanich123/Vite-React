import { FormDataValues } from "src/pages/forms/forms";

export function applyToLocalStorage(key: string, data: string | FormDataValues[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}
