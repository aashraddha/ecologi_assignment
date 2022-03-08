/// <reference types="cypress" />


// we can wait for the <img> element to appear
// but the image has not been loaded yet.
describe('VerifyImage', () => 
{
 //   it('Verify Title Of The Page', () =>
     //{
//cy.wait(5000)
////cy.get('#mb-8 > .sm\:mx-0 > a > .shadow-sm')
//.should('be.visible')
//.and(($img) => {
  // "naturalWidth" and "naturalHeight" are set when the image loads
  //expect($img[0].naturalWidth).to.be.greaterThan(0)
//})
  //   })
    //})
   it("should display a image in element div with class image", () => {
       
cy.wait(1000)
      cy.get('img', { includeShadowDom: true })
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
    })
})