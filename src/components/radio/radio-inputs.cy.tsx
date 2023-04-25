import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import RadioInputs from './radio-inputs';

describe('Radio-btns', () => {
  it('should successfully interract with the user', () => {
    const register = cy.spy();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <RadioInputs register={register} errors={{ errors: {} }} />
        </BrowserRouter>
      </Provider>
    );
    cy.get('[data-cy="input-radio-sexuality"]').check('hetero').should('be.checked');

    cy.get('[data-cy="input-radio-gender"]').check('male').should('be.checked');

    cy.get('[data-cy="input-radio-gender"]').check('female').should('be.checked');

    cy.get('[data-cy="input-radio-sexuality"]').check('homosexual').should('be.checked');
  });
});
