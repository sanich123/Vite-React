import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import AboutUs from './about-us';
import { BrowserRouter } from 'react-router-dom';

describe('About us', () => {
  it('should correctly render', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByText(/about us/i)).toBeDefined();
  });
});
