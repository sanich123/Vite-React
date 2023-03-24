import React, { createRef, RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import DateInputs from './date-inputs';

const ref1 = createRef() as RefObject<HTMLInputElement>;
const ref2 = createRef() as RefObject<HTMLInputElement>;
const ref3 = createRef() as RefObject<HTMLInputElement>;

describe('DateInputs', () => {
  it('should render correctly', () => {
    render(<DateInputs inputs={{ birthday: ref1, delivery: ref2, time: ref3 }} />);
    ['birthday', 'choose your delivery date', 'choose your delivery time'].map((text) =>
      expect(screen.getByLabelText(new RegExp(`${text}`, 'i'))).toBeDefined()
    );
    expect(
      screen.getAllByText(
        /You must choose date, to send the form. Date must be below 01 January 2024/i
      )
    ).toBeDefined();
    expect(
      screen.getByText(/You must choose time, to send the form. Time must be from 10 till 18/i)
    ).toBeDefined();
  });
});
