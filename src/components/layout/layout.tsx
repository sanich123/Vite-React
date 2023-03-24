import React, { Component, ReactNode } from 'react';
import Header from '../header/header';

interface LayoutProps {
  children: ReactNode;
}

export class Layout extends Component<LayoutProps> {
  render() {
    return (
      <main className="page__body">
        <Header />
        {this.props.children}
      </main>
    );
  }
}
