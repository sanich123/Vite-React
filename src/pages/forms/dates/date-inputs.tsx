import React from "react";
import { DATE_MOCKS } from "src/utils/const/texts";

export default class DateInputs extends React.Component {

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
              defaultValue={defaultValue}
              // required
            />
          </div>
        ))}
      </>
    );
  }
}
