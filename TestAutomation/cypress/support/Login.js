
require('cypress-xpath');

class Login {

   visit() {
    cy.visit('/web/index.php/auth/login');
  }

  Email(email) {
    cy.get('[name="username"]').type(email);
  }

  Password(password) {
    cy.get('[name="password"]').type(password);
  }
  
  Submit(){
    cy.get('[type="submit"]').click();
  }


  }
  
  export default Login;
  