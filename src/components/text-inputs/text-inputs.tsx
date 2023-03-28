import React from 'react';
import { INPUTS_TEXT_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function TextInputs({ register, errors }: InputRegisterType) {
  return (
    <>
      {INPUTS_TEXT_MOCKS.map(({ name, placeholder, type, title }) => (
        <div key={`${name}${placeholder}`} className={`input__wrapper input-${name}`}>
          <label htmlFor={`input-${name}`}>{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
          <input
            {...register(name, { required: true, minLength: 5 })}
            type={type}
            name={`${name}`}
            id={`input-${name}`}
            title={title}
            placeholder={placeholder}
            className="input__text"
          />
          {errors[name] && (
            <span className="errors-span">
              This field is required and must be more than 5 symbols
            </span>
          )}
        </div>
      ))}
    </>
  );
}
