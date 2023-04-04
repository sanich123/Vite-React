import { useRouteError } from 'react-router-dom';
import React from 'react';
import Header from 'src/components/header/header';

export default function ErrorPage() {
  const { status, message, statusText } = useRouteError() as {
    status: string;
    message: string;
    statusText: string;
  };

  return (
    <div>
      <Header />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{message}</p>
      <p>{statusText}</p>
      <p>{status}</p>
      <p>If you want go to the main page</p>
    </div>
  );
}
