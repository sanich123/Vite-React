import React, { Component } from 'react';

export const CHECKBOXES_MOCKS = [
  {
    name: 'email',
    text: 'Send me emails',
    defaultChecked: true,
  },
  {
    name: 'sms',
    text: 'Send me sms',
    defaultChecked: false,
  },
];
export default class CheckboxesInputs extends Component {
  render() {
    return (
      <>
        {CHECKBOXES_MOCKS.map(({ name, text, defaultChecked }) => (
          <div key={`${name}${text}`}>
            <input
              type="checkbox"
              name={`subscribe-${name}`}
              id={`checkbox-subscribe-${name}`}
              defaultChecked={defaultChecked}
            />
            <label htmlFor={`checkbox-subscribe-${name}`}>{text}</label>
          </div>
        ))}
      </>
    );
  }
}
