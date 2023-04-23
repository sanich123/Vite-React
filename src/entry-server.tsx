import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './app';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

export function render({ url }) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={setupStore()}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  return { html };
}
