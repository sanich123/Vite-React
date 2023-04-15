import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type FormDataValues = {
  [key: string]: FormDataEntryValue;
};

export type InitialState = {
  [key: string]: string;
};

export type InputRegisterType = {
  register: UseFormRegister<{ [key: string]: string }>;
  errors: FieldErrors<FieldValues>;
};
