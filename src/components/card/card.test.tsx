import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import { MOCK_USERS } from 'src/utils/mocks/mocks';
import UserEvent from '@testing-library/user-event';
import Card from './card';

describe('Card', () => {
  const setIsShowMore = vi.fn();
  const getIdUser = vi.fn();
  it('should correctly render', () => {
    render(<Card user={MOCK_USERS[0]} setIsShowMore={setIsShowMore} getIdUser={getIdUser} />);
    const { name, username } = MOCK_USERS[0];
    expect(screen.getByText(new RegExp(`${username}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${name}`, 'i'))).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByText(/show more/i)).toBeDefined();
  });
  it('user should interract with the page', async () => {
    render(<Card user={MOCK_USERS[0]} setIsShowMore={setIsShowMore} getIdUser={getIdUser} />);
    const showMoreBtn = screen.getByRole('button');
    await UserEvent.click(showMoreBtn);
    expect(setIsShowMore).toHaveBeenCalled();
    expect(getIdUser).toHaveBeenCalled();
  });
});
