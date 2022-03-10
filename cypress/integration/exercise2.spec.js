/// <reference types="cypress" />

describe('Browser Actions', () => {
    
    beforeEach(() => {
        cy.visit("https://saucedemo.com");
    });

    it('Inputs', () => {  
        const user = {
            login: "standard_user",
            password: "secret_sauce",
            zip: "A1A1A1",
            firstName: "Douglas",
            lastName: "Davila",
            email: "douglas.davila@objectedge.com",
            special: "Vegetarian",
            phrase: "I, Douglas Davila, wish to buy 3 General Admission tickets. I understand that all ticket sales are final."
        }
    
        /*
        cy.get('#first-name').type('Jhon');
        cy.get('#last-name').type('Doe');
        cy.get('#email').type('jhondoe@mail.com');
        */
        cy.loginSwag(user);
        cy.selectProduct(user);
        cy.checkout(user);
    });

});
    