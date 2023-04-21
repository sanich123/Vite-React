import React, { StrictMode } from 'react';
import ReactDOMServer from 'react-dom/server';
// import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export function render() {
  const html = ReactDOMServer.renderToPipeableStream(
    <StrictMode>
      <Provider store={setupStore()}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
  return { html };
}
