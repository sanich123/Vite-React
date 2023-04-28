// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import '@cypress/code-coverage/support';

import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
import React from 'react';
import { MountOptions, MountReturn, mount } from 'cypress/react18';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import '../../src/styles/entry.scss';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount(component: React.ReactNode, options?: MountOptions & { routerProps?: MemoryRouterProps }): Cypress.Chainable<MountReturn>;
    }
  }
}
Cypress.on('uncaught:exception', () => false);
Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;
  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>;
  return mount(wrapped, mountOptions);
});
