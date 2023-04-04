import React, { createRef, RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import Selects from './selects';
import { COUNTRIES } from 'src/utils/const/texts';

const ref1 = createRef() as RefObject<HTMLSelectElement>;
const ref2 = createRef() as RefObject<HTMLSelectElement>;

describe('Selects', () => {
  it('should correctly render', () => {
    render(<Selects countryInput={ref1} cityInput={ref2} />);
    COUNTRIES.slice(0, 30).map((country) => {
      expect(screen.getByText(new RegExp(`${country}`, 'i'))).toBeDefined();
    });
  });
});
