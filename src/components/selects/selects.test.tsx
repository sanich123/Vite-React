import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import Selects from './selects';
import { COUNTRIES } from 'src/utils/const/texts';
import UserEvent from '@testing-library/user-event';

describe('Selects', () => {
  it('should correctly render', () => {
    render(<Selects register={vi.fn()} errors={{ errors: {} }} />);
    COUNTRIES.slice(0, 30).map((country) => {
      expect(screen.getByText(new RegExp(`${country}`, 'i'))).toBeDefined();
    });
  });
  it('should interract with the user', async () => {
    render(<Selects register={vi.fn()} errors={{ errors: {} }} />);
    const select = screen.getByDisplayValue('Russia');
    const select2 = screen.getByDisplayValue('Monterey');
    await UserEvent.click(select);
    expect(await screen.findByText(/china/i)).toBeDefined();
    await UserEvent.click(select2);
    expect(await screen.findByText(/akron/i)).toBeDefined();
  });
});
