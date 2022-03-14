
//cria função (comando) personalizado
Cypress.Commands.add('login', (user) => { 
    cy.get('#user-name').type(user.login);
    cy.get('#password').type(user.password);
    cy.wait(1000);
    cy.get('#login-button').click();
});

Cypress.Commands.add('addToCart', (itemPos) => { 
    cy.wait(1000);
    cy.xpath('(//button[contains(text(),"Add to cart")])['+itemPos+']').click();
});

Cypress.Commands.add('goToCart', () => { 
    cy.wait(2000);
    cy.get('#shopping_cart_container').click();
});


/*
cy.url().should('include', 'demoblaze');
cy.url().should('eq', 'https://demoblaze.com/');
cy.title().should('eq', 'STORE')
*/