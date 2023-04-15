import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import UserEvent from '@testing-library/user-event';
import InputSearch from './input-search';
import { renderWithProviders } from 'src/tests/render-with-providers';

describe('Input-search', () => {
  it('should correctly renders', () => {
    renderWithProviders(<InputSearch />);
    expect(screen.getByLabelText(/To find something focus into the input and click Enter/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Search here, motherfucker/i)).toBeDefined();
    expect(screen.getByRole('searchbox')).toBeDefined();
  });
  it('should interract with user', async () => {
    renderWithProviders(<InputSearch />);
    const searchBox = screen.getByPlaceholderText(/Search here, motherfucker/i);
    expect(searchBox).toBeDefined();
    await UserEvent.type(searchBox, 'hi');
    expect(await screen.findByDisplayValue(/hi/i)).toBeDefined();
  });
});
