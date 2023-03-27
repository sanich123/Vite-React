import React from 'react';
import { RADIO_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from '../../utils/types/form-types';

export default function RadioInputs({ register }: InputRegisterType) {
  return (
    <div className="input__wrapper input-radios">
      <fieldset>
        <legend>Choose your gender and sexuality</legend>
        {RADIO_MOCKS.map(({ type, name, value, defaultChecked }) => (
          <div key={`${value}`} className="radio__wrapper">
            <input
              {...register(name)}
              type={type}
              name={name}
              id={`radio-${value}`}
              defaultValue={value}
              defaultChecked={defaultChecked}
            />
            <label htmlFor={`radio-${value}`}>{`I'm ${value}`}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
