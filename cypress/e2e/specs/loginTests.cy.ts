/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import { HomePage } from "../../page-objects/homePage";
import { LoginPage } from "../../page-objects/loginPage";

describe("Test suite to handle registeration & login tests", () => {

    const home = new HomePage();
    const login = new LoginPage();
    const email = faker.internet.email();
    const password = faker.internet.password();

    beforeEach(() => {
        cy.visit("/");
    })

    it("Validate registeration of new user", () => {
        home.navigateToRegistrationPage();
        home.verifyRegisterationPage();
        home.chooseGender('male');
        home.fillFirstName(faker.person.firstName());
        home.fillLastName(faker.person.lastName());
        home.fillEmail(email);
        home.fillPassword(password);
        home.fillConfirmPassword(password);
        home.clickRegisterationBtn();
        home.validateUserRegisteration();
    })

    it("Validate login created in last test", () => {
        home.navigateToLoginPage();
        login.fillEmail(email);
        login.fillPassword(password);
        login.clickLoginBtn();
        login.validateLoginSuccess(email);
    })
})