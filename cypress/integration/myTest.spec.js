/// <reference types="cypress" />

describe('Browser Actions', () => {
    
    beforeEach(() => {
          cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
        });

    it('Inputs', () => {  
        const user = {
            firstName: "Douglas",
            lastName: "D'Avila",
            email: "douglas.davila@objectedge.com"
        }

        
        cy.login(user);
    });


});
    