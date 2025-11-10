// cypress/support/pageObjects/Homepage.js
// cypress/support/index.js

require('cypress-xpath');


class EmployeePage {
 
  Page_EmployeePage() {
    cy.xpath("//a[contains(.,'PIM')]").click();
  }

    Add_Employee() {
    cy.xpath("//a[@class='oxd-topbar-body-nav-tab-item'][contains(.,'Add Employee')]").click();
  }

  Firts_Nname() {
    cy.xpath("//input[contains(@name,'firstName')]").type("Jasmine");

  }

  Last_Name(){
    const lastname = 'Morgan' + Math.floor(Math.random() * 100);
    Cypress.env('lastname', lastname); // 🔹 Guardamos el valor globalmente
    cy.xpath("//input[contains(@name,'lastName')]").type(lastname)
  }

  Botton_Save(){
    cy.xpath("//button[@type='submit'][contains(.,'Save')]").click()
  }

  

}

export default EmployeePage;
