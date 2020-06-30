/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  cy.visit('https://seequentglobal--protodev.my.salesforce.com/')
  // use "selector", "text" arguments to "cy.contains"
  cy.contains('salesforce')
})
