import React from 'react';
import { SELECTS_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function Selects({ register }: InputRegisterType) {
  return (
    <div className="input__wrapper input__wrapper--select input-selects">
      {SELECTS_MOCKS.map(({ name, defaultValue, options }) => (
        <select
          {...register(name)}
          key={`${name}${defaultValue}`}
          name={name}
          id={`input-select-${name}`}
          defaultValue={defaultValue}
          className="input__select"
        >
          {options.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
