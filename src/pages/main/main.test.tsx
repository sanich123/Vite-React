import React from 'react';
import { describe, expect, it } from 'vitest';
import Main from './main';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { MOCK_USERS } from 'src/utils/mocks/mocks';
import UserEvent from '@testing-library/user-event';

describe('App', () => {
  it('should render correctly', async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getByText(/about us/i)).toBeDefined();
    MOCK_USERS.forEach(
      async ({
        name,
        username,
        email,
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: { lat, lng },
        },
        phone,
        website,
        company: { name: companyName, catchPhrase },
      }) => {
        expect(await screen.findByText(new RegExp(`${name}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${username}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${email}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${street}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${suite}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${city}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${zipcode}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${lat}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${lng}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${phone}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${website}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${companyName}`, 'i'))).toBeDefined();
        expect(await screen.findByText(new RegExp(`${catchPhrase}`, 'i'))).toBeDefined();
      }
    );
  });
  it('should interract with the user', async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const search = screen.getByLabelText(/try to find something/i);
    const searchBtn = screen.getByRole('button');
    await UserEvent.type(search, 'превед');
    expect(await screen.findByDisplayValue('превед')).toBeDefined();
    await UserEvent.click(searchBtn);
    await screen.debug();
  });
});
