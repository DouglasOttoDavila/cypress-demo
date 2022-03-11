/// <reference types="cypress" />

describe('Assertion Test', () => {

    it('Assertions', () => {  
        cy.visit("https://demoblaze.com/");
        cy.assertions();
    });

    it('Login', () => {  
        const user = {
            username: "testuser25",
            password: "1234",
        }
        cy.login(user);
    });
});
    