const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
    chromeWebSecurity: false,  // Deshabilitar la seguridad web de Chrome si es necesario
    pageLoadTimeout: 13000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: false,
      json: true,
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    env: {
      USERNAME: "Admin",
      PASSWORD: "admin123",
    },
  },
});
