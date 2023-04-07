import React from 'react';
import { describe, expect, it } from 'vitest';
import Main from './main';
import { screen } from '../../tests/test-utils';
import { MOCK_USERS } from 'src/utils/mocks/mocks';
import UserEvent from '@testing-library/user-event';
import { renderWithProviders } from 'src/tests/render-with-providers';

describe('App', () => {
  it('should render correctly', async () => {
    renderWithProviders(<Main />);
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getByText(/about us/i)).toBeDefined();
    MOCK_USERS.forEach(async ({ name, username }) => {
      expect(await screen.findByText(new RegExp(`${name}`, 'i'))).toBeDefined();
      expect(await screen.findByText(new RegExp(`${username}`, 'i'))).toBeDefined();
    });
  });
  it('should do fake requests, when user typing and clicking enter', async () => {
    renderWithProviders(<Main />);
    const search = screen.getByLabelText(/To find something focus into the input and click Enter/i);
    await UserEvent.type(search, 'превед');
    expect(await screen.findByDisplayValue('превед')).toBeDefined();
    await UserEvent.keyboard('[Enter]');
    expect(await screen.findByText(/превед/i)).toBeDefined();
  });
});
