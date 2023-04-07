import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '../../tests/test-utils';
import { render } from '@testing-library/react';
import FileInput from './file-input';
import userEvent from '@testing-library/user-event';

describe('FileInput', () => {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  it('should render correctly', () => {
    render(<FileInput register={vi.fn()} errors={{ errors: {} }} />);
    expect(screen.getByLabelText(/send your photo/i)).toBeDefined();
  });
  it('should correctly interract with the user', async () => {
    render(<FileInput register={vi.fn()} errors={{ errors: {} }} />);
    const inputFile = screen.getByLabelText(/send your photo/i);
    await userEvent.upload(inputFile, file);
    if (inputFile instanceof HTMLInputElement) {
      if (inputFile.files) {
        expect(inputFile.files[0]).toStrictEqual(file);
        expect(inputFile.files.item(0)).toStrictEqual(file);
        expect(inputFile.files).toHaveLength(1);
      }
    }
  });
});
