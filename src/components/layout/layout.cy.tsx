import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import { Layout } from './layout';

describe('Card', () => {
  it('should correctly renders', () => {
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Layout>
            <div />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
    ['main', 'about us', 'forms'].forEach((link) => cy.contains(new RegExp(`${link}`, 'i')));
    cy.get('a').should('have.length', 3);
  });
});
