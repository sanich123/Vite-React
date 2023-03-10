import React, { RefObject } from 'react';
import { SELECTS_MOCKS } from 'src/utils/const/texts';

export default class Selects extends React.Component<{
  [key: string]: RefObject<HTMLSelectElement>;
}> {
  render() {
    return (
      <div className="input__wrapper input__wrapper--select input-selects">
        {SELECTS_MOCKS.map(({ name, defaultValue, options }) => (
          <select
            key={`${name}${defaultValue}`}
            name={name}
            id={`input-select-${name}`}
            ref={name === 'country' ? this.props.countryInput : this.props.cityInput}
            required
            defaultValue={defaultValue}
            className="input__select"
          >
            {options.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        ))}
      </div>
    );
  }
}
