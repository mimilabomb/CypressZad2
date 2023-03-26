
describe("Nasz pierwszy blok testów", ()=>{
    beforeEach("Test z wizytą w siedzibie LMS",() => {
        
        cy.viewport(1280, 720)
        cy.visit("https://www.edu.goit.global/account/login");
      })
    it("Znajdź ola do zalogowania i zaloguj się",()=>{
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('#user_password').type("1234567890");
        cy.get('[type=submit]').should("have.text","Log in").click();
        cy.get('[data-test-id="CircularProgressbarWithChildren__children"]').click();
        cy.get('#option-2--menu--7').click();
    })  
    
  
});