import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NotFoundPage from './not-found-page';

describe('Not found page', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getByText(/about us/i)).toBeDefined();
    expect(screen.getByText(/page not found/i)).toBeDefined();
  });
});
