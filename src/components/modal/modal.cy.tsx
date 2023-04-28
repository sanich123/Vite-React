import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';

import Modal from './modal';
import { MOCK_USERS } from 'src/utils/mocks/mocks';

describe('Input-search', () => {
  it('should correctly renders', () => {
    const setIsShowMore = cy.stub();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Modal users={MOCK_USERS} idUser={'5'} setIsShowMore={setIsShowMore.as('callback')} />
        </BrowserRouter>
      </Provider>
    );
    cy.contains(/lucio/i);
    cy.contains(/rosco/i);
    cy.contains(/suite 351/i);
    cy.contains(/954-1289/i);
    cy.get('button').contains('⨉').click();
    cy.get('@callback').should('have.been.calledOnce');
  });
});
