import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import Forms from 'src/pages/forms/forms';

describe('Layout', () => {
  it('should correctly render', () => {
    render(
      <BrowserRouter>
        <Layout>
          <Forms />
        </Layout>
      </BrowserRouter>
    );
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeDefined();
  });
});
