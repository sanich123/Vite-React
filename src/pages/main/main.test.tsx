import React from 'react';
import { describe, expect, it } from 'vitest';
import App from './main';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getByText(/about us/i)).toBeDefined();
  });
});
