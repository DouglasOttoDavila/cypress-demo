
//cria função (comando) personalizado
Cypress.Commands.add('fillForm', (user) => { 
    cy.get('#first-name').type(user.firstName);
    cy.get('#last-name').type(user.lastName);
    cy.get('#email').type(user.email);
    cy.get('#ticket-quantity').select('3');
    cy.get('#general').check();
    cy.get('#publication').check();
    cy.get('#social-media').check();
    cy.get('#requests').type(user.special);
    cy.get('#general').check();
    cy.get('p').should('contain', user.phrase);
    cy.get('#agree').check();
})

