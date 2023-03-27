import React from 'react';
import { CHECKBOXES_MOCKS } from 'src/utils/const/texts';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function CheckboxesInputs({ register }: InputRegisterType) {
  return (
    <div className="input__wrapper input-checkboxes">
      <fieldset>
        <legend>Choose your subscribe</legend>
        {CHECKBOXES_MOCKS.map(({ name, text, defaultChecked }) => (
          <div key={`${name}${text}`} className="checkbox__wrapper">
            <input
              {...register(name)}
              type="checkbox"
              name={`subscribe${name}`}
              id={`checkbox-subscribe-${name}`}
              defaultChecked={defaultChecked}
            />
            <label htmlFor={`checkbox-subscribe-${name}`}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
