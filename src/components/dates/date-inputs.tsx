import React from 'react';
import { DATE_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function DateInputs({ register, errors }: InputRegisterType) {
  return (
    <>
      {DATE_MOCKS.map(({ name, min, max, title, type }) => {
        console.log(errors);
        return (
          <div key={`${name}${title}`} className={`input__wrapper input-${name}`}>
            <label htmlFor={`input-${name}`}>{title}</label>
            <input {...register(name, { required: true })} type={type} name={name} id={`input-${name}`} min={min} max={max} className="input__date" />
            {errors[name] && <span className="errors-span">This field is required</span>}
          </div>
        );
      })}
    </>
  );
}
