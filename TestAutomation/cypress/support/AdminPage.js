// cypress/support/pageObjects/Homepage.js
// cypress/support/index.js
import AddUser from '../support/AddUserPage';

require('cypress-xpath');


class AdminPage {
 
  Botton_Admin() {
    cy.xpath("//a[@class='oxd-main-menu-item'][contains(.,'Admin')]").click();
  }

  Find_Username() {
    const username = Cypress.env('username'); // 🔹 Lo recuperamos
    cy.xpath("(//input[contains(@class,'oxd-input')])[2]").type(username);

  }

  Botton_Search(){
    cy.xpath("//button[@type='submit'][contains(.,'Search')]").click()
  }

  Botton_Edit(){
    cy.xpath("//i[contains(@class,'oxd-icon bi-pencil-fill')]").click()
  }

  

}

export default AdminPage;
