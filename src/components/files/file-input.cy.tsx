import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import FileInput from './file-input';

describe('File-input', () => {
  it('should successfully insert file from the filesystem', () => {
    const register = cy.spy();
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <FileInput register={register} errors={{ errors: {} }} />
        </BrowserRouter>
      </Provider>
    );

    cy.get('[data-cy="label-img"]').click();
    cy.get('[data-cy="input-img"]').should('have.focus').selectFile('src/assets/img/Roadmap.jpeg').should('have.value', 'C:\\fakepath\\Roadmap.jpeg');
  });
});
