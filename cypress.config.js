const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'your project id from https://cloud.cypress.io/',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
