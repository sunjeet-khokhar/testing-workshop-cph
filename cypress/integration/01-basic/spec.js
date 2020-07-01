/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  //cy.visit('https://my.salesforce.com/')
  // use "selector", "text" arguments to "cy.contains"
  //cy.contains('salesforce')
  //cy.contains('Log In to Sandbox')
  //cy.get('#username').type('')
  //cy.get('#password').type('')
  //cy.get('#Login').click()
  // After this the test does not work because of this known limitation in Cypress's
  // handlingof iframes  --> https://github.com/cypress-io/cypress/issues/2367
  //cy.visit('https://lightning.force.com/lightning/page/home/').invoke('target', '_self')
  cy.request('https://salesforce.com/?un=r%40see.com&pw=&startURL=%2F001')
  //cy.visit('https://lightning.force.com/lightning/page/home')
})