import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import CheckboxesInputs from './checkboxes';

describe('Checkboxes', () => {
  it('should successfully interract with the user', () => {
    const register = cy.spy();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <CheckboxesInputs register={register} />
        </BrowserRouter>
      </Provider>
    );
    cy.get('[data-cy="input-checkbox-checkboxes"]').check(['email', 'sms']).should('be.checked');
    cy.get('[data-cy="input-checkbox-checkboxes"]').uncheck('sms');
    cy.get('[data-cy="input-checkbox-checkboxes"]').should('have.value', 'email').should('be.checked');
  });
});
