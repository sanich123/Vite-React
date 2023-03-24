import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import ErrorPage from './error-page';

vi.mock('react-router-dom', async () => ({
  ...vi.importActual('react-router-dom'),
  useRouteError: () => ({
    status: 404,
    message: 'We couldnt be able to find your page',
    statusText: 'some fucking text',
  }),
  NavLink: ({ children, to }: { children: JSX.Element; to: string }) =>
    React.createElement('a', { href: to }, children),
}));

describe('ErrorPage', () => {
  it('should correctly render error info', () => {
    render(<ErrorPage />);
    [
      'Oops!',
      'Sorry, an unexpected error has occurred.',
      'We couldnt be able to find your page',
      'some fucking text',
      '404',
      'If you want go to the main page',
    ].map((text) => expect(screen.getByText(new RegExp(`${text}`))).toBeDefined());
  });
});
