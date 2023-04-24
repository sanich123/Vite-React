import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    supportFile: './cypress/support/component.tsx',
    // setupNodeEvents(on, config) {
    //   require("@cypress/code-coverage/task")(on, config);

    //   return config;
    // },
  },
});
