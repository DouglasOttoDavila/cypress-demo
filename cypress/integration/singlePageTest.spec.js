/// <reference types="cypress" />

describe('Single Page Test', () => {
    
    beforeEach(() => {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
    });

    it('Inputs', () => {  
        const user = {
            firstName: "Douglas",
            lastName: "Davila",
            email: "douglas.davila@objectedge.com",
            special: "Vegetarian",
            phrase: "I, Douglas Davila, wish to buy 3 General Admission tickets. I understand that all ticket sales are final."
        }
    
        cy.fillForm(user);

    });

});
    