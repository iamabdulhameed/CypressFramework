/// <reference types="cypress" />

export class SearchPage {
    // Locators

    searchResults(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="page search-page"]');
    }

    // Methods
    validateSpecificSearchedItem(itemName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.searchResults().within($ele => {
            cy.wrap($ele).find('.product-title').should('contain.text', itemName).and('have.length', 1);
        })
    }
}