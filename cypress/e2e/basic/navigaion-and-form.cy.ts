/// <reference types="cypress" />

describe('Navigation testing', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('correctly navigate through the app', () => {
    cy.contains(/forms/i).click();
    cy.get('[data-cy="label-name"]').click();
    cy.get('[data-cy="input-name"]').should('have.focus').type('Fucking Vladimir').should('be.visible');

    cy.get('[data-cy="label-surname"]').click();
    cy.get('[data-cy="input-surname"]').should('have.focus').type('Putin').should('be.visible');

    cy.get('[data-cy="label-zipcode"]').click();
    cy.get('[data-cy="input-zipcode"]').should('be.focused').type('From fucking kremlin').should('be.visible');

    cy.get('[data-cy="label-birthday"]').click();
    cy.get('[data-cy="input-birthday"]').should('have.focus').type('2023-05-01').should('have.value', '2023-05-01').should('be.visible');

    cy.get('[data-cy="label-delivery"]').click();
    cy.get('[data-cy="input-delivery"]').should('have.focus').type('2023-07-29').should('have.value', '2023-07-29').should('be.visible');

    cy.get('[data-cy="label-time"]').click();
    cy.get('[data-cy="input-time"]').should('have.focus').type('17:00').should('have.value', '17:00').should('be.visible');

    cy.get('[data-cy="select-country"]').select('Angola').should('be.visible').should('have.value', 'Angola');

    cy.get('[data-cy="select-city"]').select('Amarillo').should('be.visible').should('have.value', 'Amarillo');

    cy.get('[data-cy="label-img"]').click();
    cy.get('[data-cy="input-img"]').should('have.focus').selectFile('src/assets/img/Roadmap.jpeg').should('have.value', 'C:\\fakepath\\Roadmap.jpeg');

    cy.get('[data-cy="input-radio-sexuality"]').check('hetero').should('be.checked');

    cy.get('[data-cy="input-radio-gender"]').check('male').should('be.checked');

    cy.get('[data-cy="input-radio-gender"]').check('female').should('be.checked');

    cy.get('[data-cy="input-radio-sexuality"]').check('homosexual').should('be.checked');

    cy.get('[data-cy="input-checkbox-checkboxes"]').check(['email', 'sms']).should('be.checked');
    cy.get('[data-cy="input-checkbox-checkboxes"]').uncheck('sms');
    cy.get('[data-cy="input-checkbox-checkboxes"]').should('have.value', 'email').should('be.checked');

    cy.get('[data-cy="submit-btn"]').click();

    cy.get('[data-cy="label-birthday"]').click();
    cy.get('[data-cy="input-birthday"]').should('have.focus').type('2005-05-01').should('have.value', '2005-05-01').should('be.visible');

    cy.get('[data-cy="submit-btn"]').click();

    cy.contains('Fucking Vladimir');
    cy.contains('Putin');
    cy.contains(/I'm homosexual/i);
    cy.contains(/from fucking kremlin/i);
    cy.contains(/send me: email/i);

    cy.get('[data-cy="input-name"]').should('have.value', '');
    cy.get('[data-cy="input-surname"]').should('have.value', '');
    cy.get('[data-cy="input-zipcode"]').should('have.value', '');
    cy.contains(/about us/i).click();
    cy.contains(/страница про нас/i);
    cy.contains(/main/i).click();
  });
});
