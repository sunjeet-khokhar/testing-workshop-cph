/// <reference types="cypress" />
beforeEach(() => {
  cy.visit('localhost:3000')
})

it('loads', () => {
  cy.contains('a', 'TodoMVC')
})

it('starts with zero items', () => {
  cy.get('li.todo').should('have.length', 0)
})

it('adds two items', () => {
  cy.get('.new-todo').type('first item{enter}')
  cy.contains('li.todo', 'first item').should('be.visible')
  cy.get('.new-todo').type('second item{enter}')
  cy.contains('li.todo', 'second item').should('be.visible')
})

/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it('can mark items as completed', () => {
  const ITEM_SELECTOR = 'li.todo'
  addItem('simple')
  addItem('difficult')

  cy
    .contains(ITEM_SELECTOR, 'simple')
    .should('exist')
    .find('input[type="checkbox"]')
    .check()
  // have to force click because the button does not appear unless we hover
  cy.contains(ITEM_SELECTOR, 'simple').find('.destroy').click({ force: true })
  cy.contains(ITEM_SELECTOR, 'simple').should('not.exist')
  cy.get(ITEM_SELECTOR).should('have.length', 1)
  cy.contains(ITEM_SELECTOR, 'difficult').should('be.visible')
})

it('can add many items', () => {
  // assumes there are no items at the beginning

  const N = 5
  for (let k = 0; k < N; k += 1) {
    addItem(`item ${k}`)
  }
  // check number of items
  cy.get('li.todo').should('have.length', 5)
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
