import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import Cards from './cards';
import { MOCK_DATA } from 'src/utils/mocks/mocks';

describe('Cards', () => {
  it('should correctly renders', () => {
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Cards formData={MOCK_DATA} />
        </BrowserRouter>
      </Provider>
    );
    MOCK_DATA.map(({ name, surname, city, zipcode, country, sexuality, gender, birthday, delivery, time, checkboxes }) => {
      cy.contains(new RegExp(`${name}`, 'i'));
      cy.contains(new RegExp(`${surname}`, 'i'));
      cy.contains(new RegExp(`${city}`, 'i'));
      cy.contains(new RegExp(`${zipcode}`, 'i'));
      cy.contains(new RegExp(`${country}`, 'i'));
      cy.contains(new RegExp(`${sexuality}`, 'i'));
      cy.contains(new RegExp(`${gender}`, 'i'));
      cy.contains(new RegExp(`${birthday}`, 'i'));
      cy.contains(new RegExp(`${delivery}`, 'i'));
      if (checkboxes.length) {
        cy.contains(new RegExp('Send me:', 'i'));
      } else {
        cy.contains(/nothing/i);
      }
      cy.contains(new RegExp(`${time}`, 'i'));
    });
  });
});
