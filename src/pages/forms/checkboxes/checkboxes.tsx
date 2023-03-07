import React, { Component } from 'react';
import { CHECKBOXES_MOCKS } from 'src/utils/const/texts';

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
