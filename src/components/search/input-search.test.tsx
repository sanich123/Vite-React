import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import UserEvent from '@testing-library/user-event';
import InputSearch from './input-search';

describe('Input-search', () => {
  it('should correctly renders', () => {
    render(<InputSearch setUsers={vi.fn()} setError={vi.fn()} setIsLoading={vi.fn()} />);
    expect(screen.getByLabelText(/To find something focus into the input and click Enter/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Search here, motherfucker/i)).toBeDefined();
    expect(screen.getByRole('searchbox')).toBeDefined();
  });
  it('should interract with user', async () => {
    render(<InputSearch setUsers={vi.fn()} setError={vi.fn()} setIsLoading={vi.fn()} />);
    const searchBox = screen.getByPlaceholderText(/Search here, motherfucker/i);
    expect(searchBox).toBeDefined();
    await UserEvent.type(searchBox, 'hi');
    expect(await screen.findByDisplayValue(/hi/i)).toBeDefined();
  });
});
