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
  it('should correctly show errors', async () => {
    renderWithProviders(<Main />);
    const search = screen.getByLabelText(/To find something focus into the input and click Enter/i);
    await UserEvent.type(search, 'error path');
    expect(await screen.findByDisplayValue(/error path/i)).toBeDefined();
    await UserEvent.keyboard('[Enter]');
    expect(await screen.findByText(/an error occured/i)).toBeDefined();
  });
  it('should correcly interract with user by show more btn and show modal window', async () => {
    renderWithProviders(<Main />);
    expect(screen.getByText(/Your search query did not match any object in the server/i)).toBeDefined();
    const search = screen.getByLabelText(/To find something focus into the input and click Enter/i);
    await UserEvent.type(search, 'превед');
    expect(await screen.findByDisplayValue('превед')).toBeDefined();
    await UserEvent.keyboard('[Enter]');
    expect(await screen.findByText(/превед/i)).toBeDefined();
    const showMoreBtn = await screen.findByText(/show more/i);
    await UserEvent.click(showMoreBtn);
    expect(await screen.findByText(/Sincere@april.biz/i)).toBeDefined();
    expect(await screen.findByText(/City: Gwenborough/i)).toBeDefined();
    expect(await screen.findByText(/Street: Kulas Light/i)).toBeDefined();
    expect(await screen.findByText(/Flat: Apt. 556/i)).toBeDefined();
    expect(await screen.findByText(/Zipcode: 92998-3874/i)).toBeDefined();
    const closeBtn = await screen.findByText(/⨉/i);
    await UserEvent.click(closeBtn);
    expect(await screen.findByText(/превед/i)).toBeDefined();
    expect(await screen.findByText(/Bret/i)).toBeDefined();
    expect(await screen.findByText(/Show more/i)).toBeDefined();
  });
});
