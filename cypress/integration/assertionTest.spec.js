/// <reference types="cypress" />

describe('Assertion Test', () => {

    before(() => {
        cy.visit("https://demoblaze.com/");
    });

    it('Assertions', () => {  
        cy.assertions();
    });

    it('Login', () => {  
        const user = {
            username: "testuser25",
            password: "1234",
        }
        cy.loginAssertionTest(user);
    });
});
    