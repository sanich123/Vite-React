import App from '../pages/main/main';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Forms from 'src/pages/forms/forms';
import AboutUs from 'src/pages/about-us/about-us';
import ErrorPage from 'src/pages/error-page/error-page';
import { Routes } from 'src/utils/const/const';

export const router = createBrowserRouter([
  {
    path: Routes.main,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: Routes.aboutUs,
    element: <AboutUs />,
  },
  {
    path: Routes.forms,
    element: <Forms />,
    errorElement: <ErrorPage />,
  },
]);
