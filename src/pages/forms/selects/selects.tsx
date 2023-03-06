import React from 'react';
import { CITIES, COUNTRIES } from 'src/utils/const/texts';

export default class Selects extends React.Component {
  render() {
    return (
      <>
        <select name="countries" id="input-select-countries" defaultValue="Russia" required>
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select name="cities" id="input-select-cities" defaultValue="Monterey" required>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </>
    );
  }
}
