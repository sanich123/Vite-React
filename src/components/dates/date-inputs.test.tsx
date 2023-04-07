import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import DateInputs from './date-inputs';

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
  it('should show error messages', () => {
    render(
      <DateInputs
        register={vi.fn()}
        errors={{
          errors: {
            delivery: {
              type: 'string',
              message: 'Some message',
            },
          },
        }}
      />
    );
  });
});
