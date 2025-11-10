import EmployeePage from '../support/Employee';

require('cypress-xpath');


class AddUser {



  Botton_Add() {
    cy.xpath("//button[@type='button'][contains(.,'Add')]").click();
  }

  Select_Role() {
    cy.xpath("(//div[@class='oxd-select-text-input'][contains(.,'-- Select --')])[1]")
      .should('be.visible')
      .click();
    cy.xpath("//div[@role='listbox']//div[@class='oxd-select-option'][contains(.,'ESS')]")
      .should('be.visible')
      .click();
  }


  Select_Estatus() {
    cy.xpath("(//div[@class='oxd-select-text-input'][contains(.,'-- Select --')])")
      .should('be.visible')
      .click();
    cy.xpath("//div[@role='listbox']//div[@class='oxd-select-option'][contains(.,'Enabled')]")
      .should('be.visible')
      .click();
  }


  Select_Employee() {
    const lastname = Cypress.env('lastname' || ''); // 🔹 Lo recuperamos
    cy.xpath("//input[contains(@placeholder,'Type for hints...')]")
      .should('be.visible')
      .type(`Jasmine ${lastname}`)
      .wait(4000)
      .type("{downarrow}{enter}");
  }

   Input_Name() {
    const username = 'Jasmine.Morgan' + Math.floor(Math.random() * 100);
    Cypress.env('username', username); // 🔹 Guardamos el valor globalmente
    cy.xpath("(//input[contains(@class,'oxd-input')])[2]").type(username);
   
  }

  Input_Password() {
    cy.xpath("(//input[contains(@type,'password')])[1]").type("d123456")
  }

  Input_Conf_Password() {
    cy.xpath("(//input[contains(@type,'password')])[2]").type("d123456")
  }


  Botton_Save() {
    cy.xpath("//button[@type='submit'][contains(.,'Save')]").click()
  }



}

export default AddUser;
