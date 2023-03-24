import React, { createRef, RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import CheckboxesInputs from './checkboxes';

const ref1 = createRef() as RefObject<HTMLInputElement>;
const ref2 = createRef() as RefObject<HTMLInputElement>;

describe('Checkboxes', () => {
  it('should render correctly', () => {
    render(<CheckboxesInputs emailEnabledInput={ref1} smsEnabledInput={ref2} />);
    ['send me emails', 'send me sms'].map((text) =>
      expect(screen.getByLabelText(new RegExp(`${text}`, 'i'))).toBeDefined()
    );
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });
});
