import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import Modal from './modal';
import { MOCK_USERS } from '../../utils/mocks/mocks';
import UserEvent from '@testing-library/user-event';

describe('Modal', () => {
  const setIsShowMore = vi.fn();
  it('should correctly render', () => {
    render(<Modal users={MOCK_USERS} idUser={'1'} setIsShowMore={setIsShowMore} />);
    const {
      email,
      address: { city, street, suite, zipcode },
      phone,
    } = MOCK_USERS[0];
    expect(screen.getByText(new RegExp(`${email}`))).toBeDefined();
    expect(screen.getByText(new RegExp(`${city}`))).toBeDefined();
    expect(screen.getByText(new RegExp(`${street}`))).toBeDefined();
    expect(screen.getByText(new RegExp(`${suite}`))).toBeDefined();
    expect(screen.getByText(new RegExp(`${zipcode}`))).toBeDefined();
    expect(screen.getByText(new RegExp(`${phone}`))).toBeDefined();
  });
  it('should interract with the user', async () => {
    render(<Modal users={MOCK_USERS} idUser={'1'} setIsShowMore={setIsShowMore} />);
    const closeBtn = screen.getByRole('button');
    await UserEvent.click(closeBtn);
    expect(setIsShowMore).toHaveBeenCalled();
  });
});
