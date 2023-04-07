import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../tests/test-utils';
import Forms from './forms';
import { COUNTRIES } from 'src/utils/const/texts';
import { renderWithProviders } from 'src/tests/render-with-providers';
import userEvent from '@testing-library/user-event';

describe('Forms', () => {
  it('should render correctly', () => {
    renderWithProviders(<Forms />);
    ['main', 'about us', 'forms'].map((item) => expect(screen.getByText(new RegExp(`${item}`, 'i'))).toBeDefined());
    COUNTRIES.slice(0, 30).map((country) => {
      expect(screen.getByText(new RegExp(`${country}`, 'i'))).toBeDefined();
    });
    ['homosexual', 'lesbian', 'female', 'hetero'].map((value) => expect(screen.getByLabelText(new RegExp(`${value}`))).toBeDefined());
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
  });
  it('should correctly interract with the user', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    renderWithProviders(<Forms />);
    const inputName = screen.getByRole('textbox', { name: 'name' });
    const inputSurname = screen.getByRole('textbox', { name: /surname/i });
    const inputZipcode = screen.getByRole('textbox', { name: /zipcode/i });
    const inputTime = screen.getByLabelText(/choose your delivery time:/i);
    const inputDelivery = screen.getByLabelText(/choose your delivery date:/i);
    const inputBirthday = screen.getByLabelText(/birthday/i);
    const homoSexRadio = screen.getByLabelText(/homosexual/i);
    const femaleRadio = screen.getByLabelText(/female/i);
    const emailCheckbox = screen.getByLabelText(/send me email/i);
    const submitBtn = screen.getByRole('button');
    const inputFile = screen.getByLabelText(/send your photo/i);
    await userEvent.type(inputSurname, 'Alexander');
    expect(await screen.findByDisplayValue(/alexander/i)).toBeDefined();
    await userEvent.type(inputZipcode, 'Voronin');
    expect(await screen.findByDisplayValue(/voronin/i)).toBeDefined();
    await userEvent.type(inputTime, '13:58');
    expect(await screen.findByDisplayValue(/13:58/i)).toBeDefined();
    await userEvent.type(inputDelivery, '2023-05-07');
    expect(await screen.findByDisplayValue('2023-05-07')).toBeDefined();
    await userEvent.type(inputBirthday, '1930-05-06');
    expect(await screen.findByDisplayValue('1930-05-06')).toBeDefined();
    await userEvent.click(homoSexRadio);
    await userEvent.upload(inputFile, file);
    if (homoSexRadio instanceof HTMLInputElement && femaleRadio instanceof HTMLInputElement && emailCheckbox instanceof HTMLInputElement && inputFile instanceof HTMLInputElement) {
      expect(homoSexRadio.checked).toBeDefined();
      expect(femaleRadio.checked).toBeDefined();
      expect(emailCheckbox.checked).toBeDefined();
      if (inputFile.files) {
        expect(inputFile.files[0]).toStrictEqual(file);
        expect(inputFile.files.item(0)).toStrictEqual(file);
        expect(inputFile.files).toHaveLength(1);
      }
    }
  });
});
