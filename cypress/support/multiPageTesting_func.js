
//cria função (comando) personalizado
Cypress.Commands.add('login', (user) => { 
    cy.get('#user-name').type(user.login);
    cy.get('#password').type(user.password);
    cy.wait(1000);
    cy.get('#login-button').click();
});

Cypress.Commands.add('addToCart', (itemPos) => { 
    cy.wait(500);
    cy.xpath('(//button[contains(text(),"Add to cart")])['+itemPos+']').click();
    /* cy.xpath('(//button[contains(text(),"Add to cart")])['+itemPos+']').then(($ele) => {
        const text = $ele.text();
        cy.log(text).debug;
    }) */
});

Cypress.Commands.add('goToCart', () => { 
    cy.wait(1000);
    cy.get('#shopping_cart_container').click();
});

Cypress.Commands.add('goToCheckout', () => { 
    cy.xpath('//button[contains(text(),"Checkout")]').click();
});

Cypress.Commands.add('fillCheckout', (user) => { 
    cy.get('#first-name').type(user.firstName);
    cy.get('#last-name').type(user.lastName);
    cy.get('#postal-code').type(user.zipCode);
    cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('placeOrder', () => { 
    cy.xpath('//button[contains(text(),"Finish")]').click();
});

Cypress.Commands.add('assertOrder', (user) => { 
    cy.url().should('contain', 'checkout-complete');
    cy.get('.complete-header').should('have.text', user.confirmationTitle);
    cy.get('.complete-text').should('have.text', user.confirmationText);
    cy.get('.pony_express').should('have.attr', 'src', '/static/media/pony-express.46394a5d.png');
});