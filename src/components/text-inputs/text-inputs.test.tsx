import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import TextInputs from './text-inputs';

describe('Text-inputs', () => {
  it('should correctly render', () => {
    render(<TextInputs register={vi.fn()} />);
    ['surname', 'zipcode'].map((word) => {
      expect(screen.getByLabelText(new RegExp(`${word}`, 'i'))).toBeDefined();
    });
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
  });
  it('should interact with the user', async () => {
    render(<TextInputs register={vi.fn()} />);
    const inputSurname = screen.getByText(/surname/i);
    await UserEvent.type(inputSurname, 'превед');
    expect(await screen.findByDisplayValue('превед')).toBeDefined();
  });
});
