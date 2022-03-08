describe('VerifyTitle', () => 
{
    it('Verify Title Of The Page', () =>
     {
         cy.visit('http://localhost:3000/')
         cy.title().should('eq', 'Next.js Blog Example with Markdown')

      
    })
})
