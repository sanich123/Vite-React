import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import { MOCK_USERS } from 'src/utils/mocks/mocks';
import Card from './card';

describe('Card', () => {
  it('should correctly render', () => {
    const {id, ...rest} = MOCK_USERS[0];
    render(<Card key={id} user={rest}/>);
    const {
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
      },
      phone,
    } = MOCK_USERS[0];
    expect(screen.getByText(new RegExp(`${username}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${email}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${street}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${suite}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${city}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${zipcode}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${phone}`, 'i'))).toBeDefined();
  });
});
