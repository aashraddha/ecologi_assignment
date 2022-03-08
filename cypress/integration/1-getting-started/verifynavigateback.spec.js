/// <reference types="cypress" />

const base_url ="http://localhost:3000/"

describe('Navigation', () => {
    it('should navigate back to main page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      cy.url().should('be.equal', base_url)
  
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="/"]').click({force: true})
      cy.wait(30000)
      // The new url should include "/about"
      cy.url(base_url).contains('blog')
  
      // The new page should contain an h1 with "About page"
      cy.get('h1').contains('About Page')

      cy.contains("Blog").should('exist')
    })
  })
  