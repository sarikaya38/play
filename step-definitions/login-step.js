const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')
const fs = require('fs');
const { url } = require('inspector');
const { default: test, chromium } = require('@playwright/test');
const loginPage = new LoginPage()


defineStep('I visit a login page', async function () {
  await loginPage.navigateToLoginScreen()
})

defineStep('I fill the login form with valid credentials', async function () {
  await loginPage.submitLoginForm()
})

defineStep('I should see the home page', async function () {
  await loginPage.assertUserIsLoggedIn()
})

defineStep('I wait for 3 seconds', async function () {


})

defineStep(
  /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await loginPage.submitLoginWithParameters(username, password)
  }
)




Given('user goes to {string}', async function (string) {
   
});



Then('user fill mandatory fields', function (dataTable) {
 
});