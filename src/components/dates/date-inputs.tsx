import React, { Component } from 'react';
import { DATE_MOCKS } from 'src/utils/const/texts';
import { InputsRefsAsProps } from '../../utils/types/form-types';

export default class DateInputs extends Component<InputsRefsAsProps> {
  render() {
    return (
      <>
        {DATE_MOCKS.map(({ name, min, max, title, type }) => (
          <div key={`${name}${title}`} className={`input__wrapper input-${name}`}>
            <label htmlFor={`input-${name}`}>{title}</label>
            <input
              type={type}
              name={name}
              id={`input-${name}`}
              min={min}
              max={max}
              required
              className="input__date"
              ref={this.props.inputs[name]}
            />
          </div>
        ))}
      </>
    );
  }
}
