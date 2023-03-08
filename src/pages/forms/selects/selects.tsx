import React, { RefObject } from 'react';
import { SELECTS_MOCKS } from 'src/utils/const/texts';

export default class Selects extends React.Component<{
  [key: string]: RefObject<HTMLSelectElement>;
}> {
  render() {
    return (
      <>
        {SELECTS_MOCKS.map(({ name, defaultValue, options }) => (
          <select
            key={`${name}${defaultValue}`}
            name={name}
            id={`input-select-${name}`}
            ref={name === 'country' ? this.props.countryInput : this.props.cityInput}
            required
            defaultValue={defaultValue}
          >
            {options.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        ))}
      </>
    );
  }
}
