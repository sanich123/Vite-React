import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import Card from './card';
import { MOCK_USERS } from 'src/utils/mocks/mocks';

describe('Card', () => {
  it('should correctly renders', () => {
    const setIsShowMore = cy.stub();
    const getIdUser = cy.stub();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Card user={MOCK_USERS[0]} setIsShowMore={setIsShowMore.as('modal-callback')} getIdUser={getIdUser.as('get-id-callback')} />
        </BrowserRouter>
      </Provider>
    );
    cy.contains(/leanne graham/i);
    cy.contains(/bret/i);
    cy.get('button').should('have.text', 'Show more').click();
    cy.get('@modal-callback').should('have.been.calledOnce');
    cy.get('@get-id-callback').should('have.been.calledOnce');
  });
});
