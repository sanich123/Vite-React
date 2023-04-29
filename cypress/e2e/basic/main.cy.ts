/// <reference types="cypress" />

describe('Navigation testing', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('interracts with the user', async () => {
    const input = cy.get('.input-search');
    input.type('leanne{enter}');
    cy.get('button').contains('Show more').click();
    cy.get('button').contains('⨉').click();
    input.clear();
    input.type('nicholas{enter}');
    cy.get('button').contains('Show more').click();
    cy.get('button').contains('⨉').click();
  });
});
