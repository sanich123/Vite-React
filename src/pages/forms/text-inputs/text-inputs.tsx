import React from 'react';
import { INPUTS_TEXT_MOCKS } from 'src/utils/const/texts';

export default class TextInputs extends React.Component<{
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
}> {
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
              defaultValue="some value"
              ref={name === 'name' ? this.props.nameInput : this.props.surnameInput}
            />
          </div>
        ))}
      </>
    );
  }
}
