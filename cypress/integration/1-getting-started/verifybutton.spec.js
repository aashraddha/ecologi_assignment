/// <reference types="cypress" />

const base_url ="http://localhost:3000/"


describe('Read Documentation', () => {
    it('click on button should navigate to the blog page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      cy.url().should('be.equal', base_url)
  
      // Find a link with an href attribute containing "docs" and click it
      cy.get('a[href*="/docs/basic-features/pages"]').click({multiple : true})
      cy.wait(3000)
      // The new url should include "/docs"
      cy.url().should('include', '/docs')
  
      // The new page should contain an h1 with "About page"
      cy.get('h1').contains('Read Documentation')
    })
  })
  