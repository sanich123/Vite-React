/// <reference types="cypress" />

describe('Navigation testing', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('interracts with the user', () => {
    cy.get('.input-search').type('leanne{enter}');
    cy.get('button').contains('Show more').click();
    cy.get('button').contains('⨉').click();
    cy.get('.input-search').clear();
    cy.get('.input-search').type('nicholas{enter}');
    cy.get('button').contains('Show more').click();
    cy.get('button').contains('⨉').click();
  });
});
