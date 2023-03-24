import App from '../pages/main/main';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Forms from 'src/pages/forms/forms';
import AboutUs from 'src/pages/about-us/about-us';
import ErrorPage from 'src/pages/error-page/error-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/forms',
    element: <Forms />,
    errorElement: <ErrorPage />,
  },
]);
