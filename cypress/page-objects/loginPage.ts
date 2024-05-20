/// <reference types="cypress" />

export class LoginPage {

    // Locators
    email(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#Email');
    }

    password(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#Password');
    }

    loginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[value="Log in"]');
    }

    accountEmailTop(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.account').eq(0);
    }

    // Methods
    fillEmail(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.email().type(email);
    }

    fillPassword(password: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.password().type(password);
    }

    clickLoginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.loginBtn().click();
    }

    validateLoginSuccess(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.accountEmailTop().should('have.text', email);
    }
}