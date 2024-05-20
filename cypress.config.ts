import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://demowebshop.tricentis.com/",
    specPattern: "cypress/e2e/specs/*.cy.ts",
    watchForFileChanges: false,
    execTimeout: 5 * 1000,
    taskTimeout: 5 * 1000,
    pageLoadTimeout: 30 * 1000
  },
});
