/// <reference types="cypress" />

describe('Browser Actions', () => {
    
    beforeEach(() => {
          cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
          //cy.visit("https://admin:admin@a1490790c1dev-store.occa.ocs.oraclecloud.com");
        });

    it('Inputs', () => {  
        const user = {
            firstName: "Douglas",
            lastName: "D'Avila",
            email: "douglas.davila@objectedge.com"
        }

        
        /*cy.get('#first-name').type('Jhon');
        cy.get('#last-name').type('Doe');
        cy.get('#email').type('jhondoe@mail.com');*/
        cy.login(user);
    });

    /*
    it('Login', () => {  
        cy.visit("https://admin:admin@a1490790c1dev-store.occa.ocs.oraclecloud.com");
        cy.get('.CC-loginHeader-login').click();
        cy.get('#CC-login-input').click().type('douglas.davila@objectedge.com');
        cy.wait(2000);
        cy.get('#CC-login-password-input').click().type('S3cur!ty');
        cy.wait(2000);
        cy.get('#CC-userLoginSubmit').click();
    });
    */

});
    