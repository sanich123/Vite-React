import { RouterProvider } from 'react-router-dom';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
