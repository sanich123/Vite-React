import React, { Component, RefObject } from 'react';
import { CHECKBOXES_MOCKS } from 'src/utils/const/texts';

export default class CheckboxesInputs extends Component<{
  emailEnabledInput: RefObject<HTMLInputElement>;
  smsEnabledInput: RefObject<HTMLInputElement>;
  disabled: boolean;
}> {
  render() {
    return (
      <div className="input__wrapper input-checkboxes">
        <fieldset>
          <legend>Choose your subscribe</legend>
          {CHECKBOXES_MOCKS.map(({ name, text, defaultChecked }) => (
            <div key={`${name}${text}`} className="checkbox__wrapper">
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
        </fieldset>
      </div>
    );
  }
}