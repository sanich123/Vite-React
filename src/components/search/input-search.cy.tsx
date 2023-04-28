import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import InputSearch from './input-search';
import { Messages } from 'src/utils/const/const';

describe('Input-search', () => {
  it('should correctly renders', () => {
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <InputSearch />
        </BrowserRouter>
      </Provider>
    );
    cy.get('.input-search-label').contains(Messages.searchLabel).click();
    cy.get('#search-input')
      .should('be.focused')
      .type('Сорок тысяч обезьян в жопу сунули банан')
      .should('be.visible')
      .clear()
      .type('Варкалось, хливкие шорьки...{enter}');
  });
});
