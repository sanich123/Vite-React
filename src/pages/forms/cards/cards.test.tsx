import React, { createRef, RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../../tests/test-utils';
import { render } from '@testing-library/react';
import Cards from './cards';
import { MOCK_DATA } from 'src/utils/mocks/mocks';

describe('Cards', () => {
  it('should correctly render', () => {
    render(<Cards data={MOCK_DATA}/>);
    MOCK_DATA.map(({name, surname, zipcode, birthday, delivery, time, country, city}) => {
      expect(screen.getByText(new RegExp(`${name}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${surname}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${zipcode}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${birthday}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${delivery}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${time}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${country}`))).toBeDefined();
      expect(screen.getByText(new RegExp(`${city}`))).toBeDefined();
    })
  });
});
