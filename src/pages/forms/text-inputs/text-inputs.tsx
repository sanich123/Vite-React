import React, { RefObject } from 'react';
import { INPUTS_TEXT_MOCKS } from 'src/utils/const/texts';
import { InputsRefsAsProps } from 'src/utils/types/types';

export default class TextInputs extends React.Component<InputsRefsAsProps> {
  render() {
    return (
      <>
        {INPUTS_TEXT_MOCKS.map(({ name, placeholder }) => (
          <div key={`${name}${placeholder}`}>
            <label htmlFor={`input-${name}`}>{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
            <input
              type="text"
              name={`${name}`}
              id={`input-${name}`}
              required
              placeholder={placeholder}
              ref={this.props.inputs[name]}
            />
            {!this.props.inputs[name].current?.value && <div>Здесь не должно быть пустое поле</div>}
          </div>
        ))}
      </>
    );
  }
}
