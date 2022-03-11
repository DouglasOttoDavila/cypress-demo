
//cria função (comando) personalizado
Cypress.Commands.add('login', (user) => { 
    cy.get('#login2').click();
    cy.wait(2000);
    cy.get('#loginusername').type(user.username);
    cy.wait(2000);
    cy.get('#loginpassword').type(user.password);
    cy.xpath('//button[contains(text(),"Log in")]').click();

});

Cypress.Commands.add('assertions', (user) => { 
    cy.url().should('include', 'demoblaze');
    cy.url().should('eq', 'https://demoblaze.com/');
    cy.title().should('eq', 'STORE')
});
