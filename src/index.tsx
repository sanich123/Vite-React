import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { router } from './router/router';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
