import React, { RefObject } from 'react';
import { FormDataValues, InitialState, ObjOfRefs } from './types/form-types';

export function getValuesFromForm(target: HTMLFormElement, fileInput: RefObject<HTMLInputElement>) {
  const formData = new FormData(target);
  const valuesFromForm: FormDataValues = {};
  for (let [key, value] of formData) {
    valuesFromForm[key] = value;
  }
  if (fileInput.current) {
    const { files } = fileInput.current;
    if (files) {
      const file = files[0];
      const name = file.name;
      const objectUrl = URL.createObjectURL(file);
      valuesFromForm['img'] = objectUrl;
      valuesFromForm['imgName'] = name;
    }
  }
  return valuesFromForm;
}

export function resetInputs(inputs: ObjOfRefs, initialState: InitialState) {
  for (let key in initialState) {
    const input = inputs[key];
    if (input.current instanceof HTMLInputElement) {
      if (key === 'sexuality' || key === 'gender' || key === 'subscribeEmail') {
        input.current.checked = true;
      } else if (key === 'subscribeSms') {
        input.current.checked = false;
      } else {
        input.current.value = initialState[key];
      }
    }
  }
}
