/// <reference types="cypress" />
// About API testing: https://docs.cypress.io/api/commands/request#Method-and-URL

import { URL_USERS } from '../../../src/utils/const/const';
describe('Check jsonplacholderAPI request', () => {
  it('Get 200 status', () => {
    cy.request({
      method: 'GET',
      url: URL_USERS,
    }).as('getEntries');

    cy.get('@getEntries').should((response: any) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
      expect(response.body).to.have.property('entries');
    });
  });
});
