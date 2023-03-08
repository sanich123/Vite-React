import React, { RefObject } from 'react';
import { RADIO_MOCKS } from 'src/utils/const/texts';
import { InputsRefsAsProps } from 'src/utils/types/types';

export default class RadioInputs extends React.Component<InputsRefsAsProps> {
  render() {
    return (
      <>
        {RADIO_MOCKS.map(({ type, name, value, defaultChecked }, i) => (
          <div key={`${i}+${value}`}>
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
      </>
    );
  }
}
