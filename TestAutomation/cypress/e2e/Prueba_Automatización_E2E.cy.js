import AdminPage from '../support/AdminPage';
import Login from '../support/Login';
import AdminEditPage from '../support/EditAdminPage';
import AddUser from '../support/AddUserPage';
import EmployeePage from '../support/Employee';


describe('Prueba', () => {
  const Admin = new AdminPage();
  const Log_in = new Login();
  const EditAdmin = new AdminEditPage();
  const User = new AddUser();
  const Employe = new EmployeePage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.intercept('GET', '/service-worker.js', { body: undefined }).as('getServiceWorker');
    Log_in.visit();

  });


  it('Editar Usuario Jasmine', () => {

    //INGRESAMOS AL lOGIN
    Log_in.Email(Cypress.env('USERNAME'))
    Log_in.Password(Cypress.env('PASSWORD'))
    Log_in.Submit()

  //CREAMOS EL EMPLEADO EN LA PAGINA PIM
    Employe.Page_EmployeePage()
    Employe.Add_Employee()
    Employe.Firts_Nname()
    Employe.Last_Name()
    Employe.Botton_Save()
    cy.wait(5000)

  //CREAMOS EL USUARIO EN LA PAGINA ADMIN

    Admin.Botton_Admin()

    User.Botton_Add()
    User.Select_Role()
    User.Select_Estatus()
    User.Input_Name()
    User.Select_Employee()
    User.Input_Password()
    User.Input_Conf_Password()
    User.Botton_Save()
    cy.wait(5000)

  //Editamos EL USUARIO EN LA PAGINA ADMIN

    Admin.Find_Username()
    Admin.Botton_Search()
    Admin.Botton_Edit()

    EditAdmin.Input_User_Name()
    EditAdmin.Botton_Save()
    EditAdmin.Messague_Succes()



  });

});

