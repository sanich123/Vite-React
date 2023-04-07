import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import DateInputs from './date-inputs';
import userEvent from '@testing-library/user-event';

describe('DateInputs', () => {
  it('should render correctly', () => {
    render(
      <DateInputs
        register={vi.fn()}
        errors={{
          errors: {},
        }}
      />
    );
    ['birthday', 'choose your delivery date', 'choose your delivery time'].map((text) => expect(screen.getByLabelText(new RegExp(`${text}`, 'i'))).toBeDefined());
  });
  it('should correctly interract with the user', async () => {
    render(
      <DateInputs
        register={vi.fn()}
        errors={{
          errors: {},
        }}
      />
    );
    const inputTime = screen.getByLabelText(/choose your delivery time:/i);
    await userEvent.type(inputTime, '13:58');
    expect(await screen.findByDisplayValue('13:58')).toBeDefined();
  });
});
