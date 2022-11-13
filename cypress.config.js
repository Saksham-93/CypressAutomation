const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:8000,
  env:{

    url: 'https://rahulshettyacademy.com/angularpractice/',
  },
  reporter:mochawesome,
  scripts:{

    test:'node_modules\\.bin\\cypress run',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: 'cypress/integration/Test8Framework.js'
    
  },
});
