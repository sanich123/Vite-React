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
    cy.get('input').type('hello, motherfucker');
    cy.get('input').should('have.value', 'hello, motherfucker');
  });
});
