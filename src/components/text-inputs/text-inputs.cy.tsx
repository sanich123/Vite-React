import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import TextInputs from './text-inputs';

describe('Text-inputs', () => {
  it('should have placholders and labels and successfully interract with the user', () => {
    const register = cy.spy();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <TextInputs register={register} errors={{ errors: {} }} />
        </BrowserRouter>
      </Provider>
    );
    ['Enter your name', 'Enter your surname', 'Where are you from'].forEach((placeholder) => cy.get(`input[placeholder*="${placeholder}"]`));
    cy.get('[data-cy="label-name"]').click();
    cy.get('[data-cy="input-name"]').should('have.focus').type('Fucking Vladimir').should('be.visible');
    cy.get('[data-cy="label-surname"]').click();
    cy.get('[data-cy="input-surname"]').should('have.focus').type('Putin').should('be.visible');
    cy.get('[data-cy="label-zipcode"]').click();
    cy.get('[data-cy="input-zipcode"]').should('be.focused').type('From fucking kremlin').should('be.visible');
  });
});
