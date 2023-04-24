import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import Cards from './cards';
import { MOCK_DATA, withoutCheckboxes } from 'src/utils/mocks/mocks';

describe('Cards', () => {
  global.URL.createObjectURL = vi.fn();
  it('should correctly render', () => {
    render(<Cards formData={MOCK_DATA} />);
    MOCK_DATA.map(({ name, surname, zipcode, birthday, delivery, time, country, city }) => {
      expect(screen.getByText(new RegExp(`${name}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${surname}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${zipcode}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${birthday}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${delivery}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${time}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${country}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${city}`))).toBeDefined();
    });
  });
  it('should correctly render without checked checkboxes', () => {
    render(<Cards formData={[withoutCheckboxes]} />);
    expect(screen.getByText(/send me: nothing/i)).toBeDefined();
  });
});
