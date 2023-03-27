import React, { ReactNode } from 'react';
import Header from '../header/header';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="page__body">
      <Header />
      {children}
    </main>
  );
}
