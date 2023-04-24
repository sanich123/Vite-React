import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import CheckboxesInputs from './checkboxes';
// import UserEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
describe('Checkboxes', () => {
  it('should render correctly', () => {
    render(<CheckboxesInputs register={vi.fn()} />);
    ['send me emails', 'send me sms'].map((text) => expect(screen.getByLabelText(new RegExp(`${text}`, 'i'))).toBeDefined());
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(screen.getByRole('group')).toBeDefined();
    expect(screen.getByText(/choose your subscribe/i)).toBeDefined();
  });
  it('should interract with the user', async () => {
    render(<CheckboxesInputs register={vi.fn()} />);
    const emailCheckbox = screen.getByLabelText(/send me emails/i);
    await userEvent.click(emailCheckbox);
    if (emailCheckbox instanceof HTMLInputElement) {
      expect(emailCheckbox.checked).toBeDefined();
    }
  });
});
