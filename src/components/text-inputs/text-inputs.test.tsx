import React, { createRef, RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import TextInputs from './text-inputs';

const ref1 = createRef() as RefObject<HTMLInputElement>;
const ref2 = createRef() as RefObject<HTMLInputElement>;
const ref3 = createRef() as RefObject<HTMLInputElement>;
describe('Text-inputs', () => {
  it('should correctly render', () => {
    render(<TextInputs inputs={{ name: ref1, surname: ref2, zipcode: ref3 }} />);
    ['surname', 'zipcode'].map((word) => {
      expect(screen.getByLabelText(new RegExp(`${word}`, 'i'))).toBeDefined();
    });
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getAllByText(/This field should not be empty/i)).toHaveLength(3);
  });
  it('should interact with the user', async () => {
    render(<TextInputs inputs={{ name: ref1, surname: ref2, zipcode: ref3 }} />);
    const inputSurname = screen.getByText(/surname/i);
    await UserEvent.type(inputSurname, 'превед');
    expect(await screen.findByDisplayValue('превед')).toBeDefined();
  });
});
