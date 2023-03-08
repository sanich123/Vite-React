import React, { RefObject, Component } from 'react';
import { DATE_MOCKS } from 'src/utils/const/texts';
import { InputsRefsAsProps } from 'src/utils/types/types';

export default class DateInputs extends Component<InputsRefsAsProps> {
  render() {
    return (
      <>
        {DATE_MOCKS.map(({ name, min, max, defaultValue, title, type }) => (
          <div key={`${name}${title}`}>
            <label htmlFor={`input-${name}`}>{title}</label>
            <input
              type={type}
              name={name}
              id={`input-${name}`}
              min={min}
              max={max}
              required
              ref={this.props.inputs[name]}
            />
            {!this.props.inputs[name].current?.value && <div>{`Нужно выбрать ${name === 'time' ? 'время' : 'дату'}, чтобы отправить форму`}</div>}
          </div>
        ))}
      </>
    );
  }
}
