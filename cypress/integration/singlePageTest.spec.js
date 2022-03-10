/// <reference types="cypress" />

describe('Single Page Test', () => {
    
    /*
    beforeEach(() => {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
    });
    */

    const user = {
            firstName: "Douglas",
            lastName: "Davila",
            email: "douglas.davila@objectedge.com",
            special: "Vegetarian",
            agreement: "I, Douglas Davila, wish to buy 3 General Admission tickets. I understand that all ticket sales are final.",
            ticketConfirmation: "Ticket(s) successfully ordered."
        }

    it('Fill Form', () => {  
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
        cy.fillForm(user);
    });

    it('Assertion: Agreements', () => {
        cy.assertAgreement(user);
        cy.confirmTicket();
    });

    it('Assertion: Reset Fields', () => {
        cy.assertReset(user);
        cy.assertEmpty();
    });

});
    