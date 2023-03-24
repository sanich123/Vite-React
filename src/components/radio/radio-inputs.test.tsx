import React, { createRef, RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import RadioInputs from './radio-inputs';

const ref1 = createRef() as RefObject<HTMLInputElement>;
const ref2 = createRef() as RefObject<HTMLInputElement>;
const ref3 = createRef() as RefObject<HTMLInputElement>;
const ref4 = createRef() as RefObject<HTMLInputElement>;
const ref5 = createRef() as RefObject<HTMLInputElement>;
describe('RadioInputs', () => {
  it('should correctly render', () => {
    render(
      <RadioInputs
        inputs={{ homosexual: ref1, lesbian: ref2, hetero: ref3, male: ref4, female: ref5 }}
      />
    );
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    ['homosexual', 'lesbian', 'female', 'hetero'].map((value) =>
      expect(screen.getByLabelText(new RegExp(`${value}`))).toBeDefined()
    );
  });
});
