import React, { Fragment } from 'react';
import { SELECTS_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function Selects({ register, errors }: InputRegisterType) {
  return (
    <div className="input__wrapper input__wrapper--select input-selects">
      {SELECTS_MOCKS.map(({ name, defaultValue, options }) => (
        <Fragment key={`${name} ${defaultValue}`}>
          <select {...register(name, { required: true })} key={`${name} ${defaultValue}`} name={name} id={`input-select-${name}`} defaultValue={defaultValue} className="input__select">
            {options.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors[name] && <span className="errors-span">This field is required</span>}
        </Fragment>
      ))}
    </div>
  );
}
