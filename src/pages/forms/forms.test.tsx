import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import Forms from './forms';
import { BrowserRouter } from 'react-router-dom';
import { COUNTRIES } from 'src/utils/const/texts';

describe('Forms', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    ['main', 'about us', 'forms'].map((item) =>
      expect(screen.getByText(new RegExp(`${item}`, 'i'))).toBeDefined()
    );
    COUNTRIES.slice(0, 30).map((country) => {
      expect(screen.getByText(new RegExp(`${country}`, 'i'))).toBeDefined();
    });
    ['homosexual', 'lesbian', 'female', 'hetero'].map((value) =>
      expect(screen.getByLabelText(new RegExp(`${value}`))).toBeDefined()
    );
  });
});
