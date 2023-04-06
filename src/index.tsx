import { RouterProvider } from 'react-router-dom';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/router';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
