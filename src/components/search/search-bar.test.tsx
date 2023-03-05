import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import { userEvent } from '../../tests/test-utils';
import SearchBar from './search-bar';

describe('Search bar', () => {
  const handleChange = vi.fn();
  it('should correctly render', async () => {
    render(<SearchBar handleChange={handleChange} />);
    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeDefined();
    await userEvent.type(searchBox, 'Putin loh');
    expect(await screen.findByDisplayValue(/putin loh/i)).toBeDefined();
    expect(handleChange).toHaveBeenCalledTimes(9);
  });
});
