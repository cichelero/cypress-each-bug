/// <reference types="cypress" />

context('.each', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/connectors')
  })

  it('BUG? - breaks a following contains command', () => {
    cy.get('.connectors-each-ul>li').each(() => {})
    cy.contains('Chai', { timeout: 10 })
  })

  it('WEIRD - it is like chaining', () => {
    cy.get('.connectors-each-ul>li').each(() => {})
    cy.contains('Lara Williams', { timeout: 10 })
  })

  it('WEIRD - adding an assertion makes it work', () => {
    cy.get('.connectors-each-ul>li').each(() => {}).should('exist')
    cy.contains('Chai', { timeout: 10 })
  })

  it('OK - reversed order', () => {
    cy.contains('Chai', { timeout: 10 })
    cy.get('.connectors-each-ul>li').each(() => {})
  })

  it('OK - followed by a get', () => {
    cy.get('.connectors-each-ul>li').each(() => {})
    cy.get('.connectors-its-ul>li', { timeout: 10 })
  })
})
