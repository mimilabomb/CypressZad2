Cypress.Commands.add('login', (username, password) => { 
  cy.get('#user_email').type(username);
  cy.get('#user_password').type(password);
  cy.get('[type=submit]').should("have.text","Log in").click();
})

describe("login test", () => {
  beforeEach("Test z wizytą w siedzibie LMS",() => {
    cy.viewport(1280, 720)
    cy.visit("https://www.edu.goit.global/account/login");
  });
  it("Zalogowanie i wylogowanie", () => {
    cy.login('testowyqa@qa.team','QA!automation-1');
    cy.get('[data-test-id="CircularProgressbarWithChildren__children"]').click();
    cy.get('#option-2--menu--8').click();
  });

 
});

