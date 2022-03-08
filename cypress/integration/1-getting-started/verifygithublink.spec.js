
/// <reference types="cypress" />

const base_url ="http://localhost:3000/"


describe('Open in GitHub account', () => {
    it('click on link view on Github account', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      cy.url().should('be.equal', base_url)
  
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="/canary/examples/blog-starter"]').click({multiple : true})
      cy.wait(30000)
      // The new url should include "/about"
      cy.url().should('include', '/examples').contains('View on GitHub')

  
      // The new page should contain an h1 with "About page"
      cy.get('h1').contains('View on GitHub')

      cy.contains("Blog").should('exist')
    })
  })
  