import App from '../pages/main/main';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ErrorPage from '../pages/error-page/error-page';
import AboutUs from '../pages/about-us/about-us';
import NotFoundPage from '../pages/not-found-page/not-found-page';

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
]);
