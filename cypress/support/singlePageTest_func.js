
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
});

Cypress.Commands.add('assertAgreement', (user) => { 
    cy.get('p').should('contain', user.agreement);
});

Cypress.Commands.add('confirmTicket', () => { 
    cy.get('#agree').check();
    cy.get('.active').click();
    //button[contains(text(),"Confirm Tickets")]
});

Cypress.Commands.add('assertReset', (user) => { 
    cy.get('.success').should('contain', user.ticketConfirmation);
});

Cypress.Commands.add('assertEmpty', () => { 
    cy.get('#first-name').should('contain', '');
    cy.get('#last-name').should('contain', '');
    cy.get('#email').should('contain', '');
    cy.get('#ticket-quantity').should('have.value', '1');
    cy.get('#publication').should('not.be.checked');
    cy.get('#social-media').should('not.be.checked');
    cy.get('#requests').should('contain', '');
});
