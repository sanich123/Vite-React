import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import { Layout } from './layout';
import Forms from 'src/pages/forms/forms';
import { renderWithProviders } from 'src/tests/render-with-providers';

describe('Layout', () => {
  it('should correctly render', () => {
    renderWithProviders(
      <Layout>
        <Forms />
      </Layout>
    );
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeDefined();
  });
});
