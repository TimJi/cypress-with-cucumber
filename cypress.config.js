const { defineConfig } = require('cypress');
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

module.exports = defineConfig({
  projectId: 'your project id from https://cloud.cypress.io/',
  e2e: {
    specPattern: ['**/*.{feature,features}', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );
      return config;
    }
  }
});
