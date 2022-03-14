/// <reference types="cypress" />

describe('Multi Page Testing', () => {
    const user = {
        login: "standard_user",
        password: "secret_sauce",
        firstName: "Douglas",
        lastName: "D'Avila",
        zipCode: "A1A1A1",
        confirmationTitle: "THANK YOU FOR YOUR ORDER",
        confirmationText: "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
    }

    before(() => {
          cy.visit("https://www.saucedemo.com/");
          Cypress.Cookies.preserveOnce('session-username', 'standard_user');
    });

    it('Login', () => {  
        cy.login(user);
    });

    it('Add products and go to cart', () => {  
        cy.addToCart(1);
        cy.addToCart(2);
        cy.addToCart(3);
        cy.goToCart();
    });

    it('Go to checkout', () => { 
        cy.goToCheckout();
        cy.fillCheckout(user);
    });

    it('Place order and assert', () => { 
        cy.placeOrder();
        cy.assertOrder(user);
    });

});
    