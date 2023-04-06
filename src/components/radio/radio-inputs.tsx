import React from 'react';
import { RADIO_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from '../../utils/types/form-types';

export default function RadioInputs({ register, errors }: InputRegisterType) {
  return (
    <div className="input__wrapper input-radios">
      <fieldset>
        <legend>Choose your gender and sexuality</legend>
        {(errors['gender'] || errors['sexuality']) && <span className="errors-span">This fields are required, you must choose your gender and sexuality</span>}
        {RADIO_MOCKS.map(({ type, name, value }) => (
          <div key={`${value}`} className="radio__wrapper">
            <input {...register(name, { required: true })} type={type} name={name} id={`radio-${value}`} value={value} />
            <label htmlFor={`radio-${value}`}>{`I'm ${value}`}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
