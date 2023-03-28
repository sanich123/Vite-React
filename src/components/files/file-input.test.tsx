import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import FileInput from './file-input';

describe('FileInput', () => {
  it('should render correctly', () => {
    render(<FileInput register={vi.fn()} />);
    expect(screen.getByLabelText(/send your photo/i)).toBeDefined();
  });
});
