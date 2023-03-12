import { RefObject } from 'react';
import { InputKeys } from 'src/utils/const/const';
import { FormDataValues, InitialState, ObjOfRefs } from './types/form-types';

export function getValuesFromForm(target: HTMLFormElement, fileInput: RefObject<HTMLInputElement>) {
  const formData = new FormData(target);
  const valuesFromForm: FormDataValues = {};
  for (const [key, value] of formData) {
    valuesFromForm[key] = value;
  }
  if (fileInput.current) {
    const { files } = fileInput.current;
    if (files) {
      const file = files[0];
      const name = file.name;
      const objectUrl = URL.createObjectURL(file);
      valuesFromForm[InputKeys.img] = objectUrl;
      valuesFromForm[InputKeys.imgName] = name;
    }
  }
  return valuesFromForm;
}

export function resetInputs(inputs: ObjOfRefs, initialState: InitialState) {
  for (const key in initialState) {
    const input = inputs[key];
    if (input.current instanceof HTMLInputElement) {
      if (
        key === InputKeys.sexuality ||
        key === InputKeys.gender ||
        key === InputKeys.subscribeEmail
      ) {
        input.current.checked = true;
      } else if (key === InputKeys.subscribeSms) {
        input.current.checked = false;
      } else {
        input.current.value = initialState[key];
      }
    }
  }
}

export function validateInputsState(state: FormDataValues) {
  const values = [];
  for (const key in state) {
    if (key !== InputKeys.subscribeEmail && key !== InputKeys.subscribeSms) {
      values.push(state[key]);
    }
  }
  return values.every((value) => value);
}
