/// <reference types="cypress" />

export class HomePage {

    // Locators
    registrationLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="ico-register"]');
    }

    registerationForm(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="page registration-page"]');
    }

    genderCheckbox(gender: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`#gender-${gender}`)
    }

    firstName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#FirstName');
    }

    lastName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#LastName');
    }

    email(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#Email')
    }

    password(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#Password')
    }

    confirmPassword(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#ConfirmPassword')
    }

    registerButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#register-button')
    }

    registerSuccess(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.result')
    }

    loginLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.ico-login')
    }

    featuredProducts(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="product-grid home-page-product-grid"]');
    }

    featuredProductsTitles(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="product-title"]>a');
    }

    searchBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#small-searchterms');
    }

    searchBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[value="Search"]')
    }

    productTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="product-title"]>a');
    }

    // Methods
    navigateToRegistrationPage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.registrationLink().click();
    }

    navigateToLoginPage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.loginLink().click();
    }

    verifyRegisterationPage(): Cypress.Chainable<JQuery<HTMLElement>> {
        cy.url().should('include', '/register');
        return this.registerationForm().should('exist');
    }

    chooseGender(gender: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.genderCheckbox(gender).check({ force: true });
    }

    fillFirstName(firstName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.firstName().type(firstName);
    }

    fillLastName(lastName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.lastName().type(lastName);
    }

    fillEmail(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.email().type(email);
    }

    fillPassword(password: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.password().type(password);
    }

    fillConfirmPassword(cnfPassword: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.confirmPassword().type(cnfPassword);
    }

    clickRegisterationBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.registerButton().click();
    }

    validateUserRegisteration(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.registerSuccess().should('contain.text', 'Your registration completed')
    }

    validateFeaturedProducts(data: any): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.featuredProducts().scrollIntoView().should('exist').and('be.visible').then(() => {
            this.featuredProductsTitles().each(($ele, index) => {
                expect($ele.text()).eq(data.featuredProducts[index]);
            })
        });
    }

    fillSearchBox(itemName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.searchBox().type(itemName);
    }

    clickSearchBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.searchBtn().click();
    }

    navigeteToCategory(categoryName: string): Cypress.Chainable<undefined> {
        return cy.contains(categoryName).click();
    }

    validateCategoryLink(endpoint: string): Cypress.Chainable<string> {
        return cy.url().should('include', endpoint);
    }
}