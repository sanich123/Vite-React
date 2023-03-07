import React from "react";
import { RADIO_MOCKS } from "src/utils/const/texts";

export default class RadioInputs extends React.Component {
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
            />
            <label htmlFor={`radio-${value}`}>I'm {value}</label>
          </div>
        ))}
      </>
    );
  }
}
