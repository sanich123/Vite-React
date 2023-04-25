import { mount } from '@cypress/react18';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'src/redux/store';
import ErrorPage from './error-page';

describe('Error-page', () => {
  it('should correctly renders', () => {
    mount(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <ErrorPage />
        </BrowserRouter>
      </Provider>
    );
  });
});
