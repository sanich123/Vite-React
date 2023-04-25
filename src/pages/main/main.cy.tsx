import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import Main from './main';

describe('Main page', () => {
  it('should correctly renders', () => {
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    cy.get('a').should('have.length', 3);
  });
  it('should correctly interracts with the user', () => {
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    cy.get('input').type('leanne');
    cy.get('input').should('have.value', 'leanne');
    cy.get('input').type('{enter}');
    cy.get('.user__card').should('have.length', 1);
    const showMoreBtn = cy.contains(/show more/gi);
    showMoreBtn.click();
    cy.get('.card__address--city').should('have.text', 'City: Gwenborough');
    cy.get('.card__address--street').should('have.text', 'Street: Kulas Light');
    cy.get('.card__address--suite').should('have.text', 'Flat: Apt. 556');
    cy.get('.card__address--zipcode').should('have.text', 'Zipcode: 92998-3874');
    cy.get('.card__address--phone').should('have.text', 'Phone: 1-770-736-8031 x56442');
    const button = cy.contains('⨉');
    button.click();
    cy.get('.user__card').should('have.length', 1);
  });
});
