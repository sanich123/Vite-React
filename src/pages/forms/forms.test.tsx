import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import Forms from './forms';
import { COUNTRIES } from 'src/utils/const/texts';
import { renderWithProviders } from 'src/tests/render-with-providers';

describe('Forms', () => {
  it('should render correctly', () => {
    renderWithProviders(<Forms />);
    ['main', 'about us', 'forms'].map((item) => expect(screen.getByText(new RegExp(`${item}`, 'i'))).toBeDefined());
    COUNTRIES.slice(0, 30).map((country) => {
      expect(screen.getByText(new RegExp(`${country}`, 'i'))).toBeDefined();
    });
    ['homosexual', 'lesbian', 'female', 'hetero'].map((value) => expect(screen.getByLabelText(new RegExp(`${value}`))).toBeDefined());
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
  });
});
