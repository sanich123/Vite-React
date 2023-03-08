import React, { Component, RefObject } from 'react';
import { CHECKBOXES_MOCKS } from 'src/utils/const/texts';

export default class CheckboxesInputs extends Component<
{
  [key: string]: RefObject<HTMLInputElement>
}> {
  render() {
    return (
      <>
        {CHECKBOXES_MOCKS.map(({ name, text, defaultChecked }) => (
          <div key={`${name}${text}`}>
            <input
              type="checkbox"
              name={`subscribe${name}`}
              id={`checkbox-subscribe-${name}`}
              defaultChecked={defaultChecked}
              ref={name === 'Email' ? this.props.emailEnabledInput : this.props.smsEnabledInput}
            />
            <label htmlFor={`checkbox-subscribe-${name}`}>{text}</label>
          </div>
        ))}
      </>
    );
  }
}
