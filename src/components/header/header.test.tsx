import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('should correctly render', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/main/i)).toBeDefined();
    expect(screen.getByText(/about us/i)).toBeDefined();
  });
});
