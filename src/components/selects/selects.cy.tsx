import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import Selects from './selects';

describe('Select-inputs', () => {
  it('should successfully interract with the user', () => {
    const register = cy.spy();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Selects register={register} errors={{ errors: {} }} />
        </BrowserRouter>
      </Provider>
    );
    cy.get('[data-cy="select-country"]').select('Angola').should('be.visible').should('have.value', 'Angola');

    cy.get('[data-cy="select-city"]').select('Amarillo').should('be.visible').should('have.value', 'Amarillo');
  });
});
