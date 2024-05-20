/// <reference types="cypress" />

import { HomePage } from "../../page-objects/homePage";
import { LoginPage } from "../../page-objects/loginPage";
import { SearchPage } from "../../page-objects/searchPage";

describe("Test suite to handle registeration & login tests", () => {

    const home = new HomePage();
    const login = new LoginPage();
    const search = new SearchPage();
    let data: any;

    before(() => {
        cy.fixture("featuredProducts").then(jsonData => {
            data = jsonData;
        })
    })

    beforeEach(() => {
        cy.session("loginWithSession", () => {
            cy.visit("/");
            home.navigateToLoginPage();
            login.fillEmail('testing@testingtest.com');
            login.fillPassword('Test@123');
            login.clickLoginBtn();
            login.validateLoginSuccess('testing@testingtest.com');
        })
        cy.visit("/");
    })

    it("Validate featured product on homepage", () => {
        home.validateFeaturedProducts(data);
    })

    it("As a user, I want to search for a specific product by entering its name in the search bar.", () => {
        home.fillSearchBox(data.featuredProducts[1]);
        home.clickSearchBtn();
        search.validateSpecificSearchedItem(data.featuredProducts[1]);
    })

    it("As a user, I want to filter products by category to find items of a specific type.", () => {
        home.navigeteToCategory("Books");
        home.validateCategoryLink('/books');
    })
})