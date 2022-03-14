/// <reference types="cypress" />

describe('Multi Page Testing', () => {
    
    before(() => {
          cy.visit("https://www.saucedemo.com/");
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('standard_user', 'standard_user');
    });

    it('Login', () => {  
        const user = {
            login: "standard_user",
            password: "secret_sauce",
        }
        cy.login(user);
    });

    it('Add to cart', () => {  
        cy.addToCart(1);
        cy.addToCart(2);
        cy.addToCart(3);
    });

    it('Go to cart', () => {  
        cy.goToCart();
    });

    

    
  
});
    