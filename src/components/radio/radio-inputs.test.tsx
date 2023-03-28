import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import RadioInputs from './radio-inputs';

describe('RadioInputs', () => {
  it('should correctly render', () => {
    render(<RadioInputs register={vi.fn()} />);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    ['homosexual', 'lesbian', 'female', 'hetero'].map((value) =>
      expect(screen.getByLabelText(new RegExp(`${value}`))).toBeDefined()
    );
  });
});
