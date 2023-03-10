import React, { RefObject } from 'react';
import { RADIO_MOCKS } from 'src/utils/const/texts';
import { InputsRefsAsProps } from '../types/form-types';

export default class RadioInputs extends React.Component<InputsRefsAsProps> {
  render() {
    return (
      <div className="input__wrapper input-radios">
        <fieldset>
          <legend>Choose your gender and sexuality</legend>
          {RADIO_MOCKS.map(({ type, name, value, defaultChecked }, i) => (
            <div key={`${i}+${value}`} className="radio__wrapper">
              <input
                type={type}
                name={name}
                id={`radio-${value}`}
                defaultValue={value}
                defaultChecked={defaultChecked}
                ref={this.props.inputs[value]}
              />
              <label htmlFor={`radio-${value}`}>I'm {value}</label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  }
}
