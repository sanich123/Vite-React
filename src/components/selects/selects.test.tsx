import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import Selects from './selects';
import { COUNTRIES } from 'src/utils/const/texts';

describe('Selects', () => {
  it('should correctly render', () => {
    render(<Selects register={vi.fn()} />);
    COUNTRIES.slice(0, 30).map((country) => {
      expect(screen.getByText(new RegExp(`${country}`, 'i'))).toBeDefined();
    });
  });
});
