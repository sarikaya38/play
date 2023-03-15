const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')
const fs = require('fs')
const { url } = require('inspector')
const { default: test, chromium } = require('@playwright/test')
const console = require('console')
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

defineStep('I wait for 3 seconds', async function () {})

defineStep(
  /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await loginPage.submitLoginWithParameters(username, password)
  }
)

Given('user goes to {string}', async function (string) {
  await page.goto(
    'https://www.lambdatest.com/selenium-playground/simple-form-demo'
  )
})

Then('user fill mandatory fields', async function (dataTable) {
  let str = 'sinan'
  await page.locator("//*[@id='user-message']").nth(0).fill(str)

  await page.locator('button', { hastext: 'Get Checked value' }).click()
  await page.pause()
  // console.log(await page.locator('//*[@id="message"]').textContent())
  //await expect(page.locator('//*[@id="message"]').toHaveContent()).toEqual(str)
  // await page.locator('.mt-20').hasText(str)
})
