import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import Header from './header';

describe('Input-search', () => {
  it('should correctly renders', () => {
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    ['main', 'about us', 'forms'].forEach((link) => cy.contains(new RegExp(`${link}`, 'i')));
    cy.get('a').should('have.length', 3);
  });
});
