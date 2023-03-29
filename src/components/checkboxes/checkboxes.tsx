import React from 'react';
import { CHECKBOXES_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function CheckboxesInputs({ register }: Pick<InputRegisterType, 'register'>) {
  return (
    <div className="input__wrapper input-checkboxes">
      <fieldset>
        <legend>Choose your subscribe</legend>
        {CHECKBOXES_MOCKS.map(({ name, text, value }) => (
          <div key={`${name}${text}`} className="checkbox__wrapper">
            <input {...register(name)} type="checkbox" name={name} id={`checkbox-subscribe-${name}`} value={value} />
            <label htmlFor={`checkbox-subscribe-${name}`}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
