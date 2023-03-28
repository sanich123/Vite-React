import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import CheckboxesInputs from './checkboxes';
describe('Checkboxes', () => {
  it('should render correctly', () => {
    render(<CheckboxesInputs register={vi.fn()} />);
    ['send me emails', 'send me sms'].map((text) =>
      expect(screen.getByLabelText(new RegExp(`${text}`, 'i'))).toBeDefined()
    );
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });
});
