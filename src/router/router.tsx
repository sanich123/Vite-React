import App from '../pages/main/main';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Forms from 'src/pages/forms/forms';
import NotFoundPage from 'src/pages/not-found-page/not-found-page';
import AboutUs from 'src/pages/about-us/about-us';

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
    errorElement: <NotFoundPage />,
  },
]);
