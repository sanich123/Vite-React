import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import TextInputs from './text-inputs';

describe('Text-inputs', () => {
  it('should correctly render', () => {
    render(<TextInputs register={vi.fn()} errors={{ errors: {} }} />);
    ['surname', 'zipcode'].map((word) => {
      expect(screen.getByLabelText(new RegExp(`${word}`, 'i'))).toBeDefined();
    });
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
  });
  it('should interact with the user', async () => {
    render(<TextInputs register={vi.fn()} errors={{ errors: {} }} />);
    const inputSurname = screen.getByRole('textbox', { name: /surname/i });
    await UserEvent.type(inputSurname, 'превед');
    expect(await screen.findByDisplayValue('превед')).toBeDefined();
    await UserEvent.clear(inputSurname);
    if (inputSurname instanceof HTMLInputElement) {
      expect(inputSurname.value).toEqual('');
    }
  });
});
