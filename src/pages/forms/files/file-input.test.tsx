import React, { createRef, RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../../tests/test-utils';
import { render } from '@testing-library/react';
import FileInput from './file-input';

const ref1 = createRef() as RefObject<HTMLInputElement>;

describe('FileInput', () => {
  it('should render correctly', () => {
    render(<FileInput fileInput={ref1} />);
    expect(screen.getByLabelText(/send your photo/i)).toBeDefined();
  });
});
