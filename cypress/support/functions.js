/*
//cria função (comando) personalizado
Cypress.Commands.add('login', (user) => { 
    cy.get('#first-name').type(user.firstName);
    cy.get('#last-name').type(user.lastName);
    cy.get('#email').type(user.email);
})
*/

//cria função (comando) personalizado
Cypress.Commands.add('login', (user) => { 
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
}),

Cypress.Commands.add('loginSwag', (user) => { 
    cy.get('#user-name').type(user.login);
    cy.get('#password').type(user.password);
    cy.get('#login-button').click();
})

Cypress.Commands.add('selectProduct', () => { 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
})

Cypress.Commands.add('checkout', (user) => { 
    cy.get('.shopping_cart_badge').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(user.firstName);
    cy.get('[data-test="lastName"]').type(user.lastName);
    cy.get('[data-test="postalCode"]').type(user.zip);
    cy.get('[data-test="continue"]').click();
})

    //cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').should('be.equal', '');
