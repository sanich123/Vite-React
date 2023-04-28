import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import DateInputs from './date-inputs';

describe('Date-inputs', () => {
  it('should correctly renders and interracts with the user', () => {
    const register = cy.spy();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <DateInputs register={register} errors={{ errors: {} }} />
        </BrowserRouter>
      </Provider>
    );
    cy.get('[data-cy="label-birthday"]').click();
    cy.get('[data-cy="input-birthday"]').should('have.focus').type('2023-05-01').should('have.value', '2023-05-01');

    cy.get('[data-cy="label-delivery"]').click();
    cy.get('[data-cy="input-delivery"]').should('have.focus').type('2023-07-29').should('have.value', '2023-07-29');

    cy.get('[data-cy="label-time"]').click();
    cy.get('[data-cy="input-time"]').should('have.focus').type('17:00').should('have.value', '17:00');
  });
});
