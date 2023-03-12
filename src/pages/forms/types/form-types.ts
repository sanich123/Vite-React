import { RefObject } from 'react';

export type FormDataValues = {
  [key: string]: FormDataEntryValue | string;
};

export type InitialState = {
  [key: string]: string;
};

export type FormState = {
  data: FormDataValues[];
  disabled: boolean;
  success: boolean;
  inputsState: FormDataValues;
};

export type ObjOfRefs = { [key: string]: RefObject<HTMLInputElement | HTMLSelectElement> };

export interface InputsRefsAsProps {
  inputs: {
    [key: string]: RefObject<HTMLInputElement>;
  };
}
