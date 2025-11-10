// cypress/support/pageObjects/Homepage.js
// cypress/support/index.js
require('cypress-xpath');


class AdminEditPage {
 

  Input_User_Name(){

  cy.xpath("(//input[contains(@class,'oxd-input')])[2]").clear().type('Jasmine.Morgan.Test' + Math.floor(Math.random() * 100));
}
  
  Botton_Save(){
    cy.xpath("//button[@type='submit'][contains(.,'Save')]").click()
  }

  Messague_Succes(){
    cy.xpath("//p[contains(@class,'oxd-text--toast-title')]")
  .should('contain.text', 'Success')
  .and('be.visible');
  }
  

}

export default AdminEditPage;
