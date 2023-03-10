import React, { Component } from 'react';
import { INPUTS_TEXT_MOCKS, Warnings } from 'src/utils/const/texts';
import { InputsRefsAsProps } from '../types/form-types';

export default class TextInputs extends Component<InputsRefsAsProps> {
  render() {
    return (
      <>
        {INPUTS_TEXT_MOCKS.map(({ name, placeholder }) => (
          <div key={`${name}${placeholder}`} className={`input__wrapper input-${name}`}>
            <label htmlFor={`input-${name}`}>{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
            <input
              type="text"
              name={`${name}`}
              id={`input-${name}`}
              required
              placeholder={placeholder}
              ref={this.props.inputs[name]}
              className="input__text"
            />
            {!this.props.inputs[name].current?.value && <div className="warning">{Warnings.inputText}</div>}
          </div>
        ))}
      </>
    );
  }
}
