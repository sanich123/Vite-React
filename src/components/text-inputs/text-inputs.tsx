import React, { Component } from 'react';
import { INPUTS_TEXT_MOCKS } from 'src/utils/const/texts';
import { InputsRefsAsProps } from '../../utils/types/form-types';

export default class TextInputs extends Component<InputsRefsAsProps> {
  render() {
    return (
      <>
        {INPUTS_TEXT_MOCKS.map(({ name, placeholder, pattern, type, title }) => (
          <div key={`${name}${placeholder}`} className={`input__wrapper input-${name}`}>
            <label htmlFor={`input-${name}`}>{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
            <input
              type={type}
              name={`${name}`}
              id={`input-${name}`}
              required
              title={title}
              placeholder={placeholder}
              ref={this.props.inputs[name]}
              className="input__text"
              pattern={pattern}
            />
          </div>
        ))}
      </>
    );
  }
}
