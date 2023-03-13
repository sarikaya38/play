Feature: Login action

  As a user
  I want to login into application
  @demo
  Scenario: Login with valid credentials
    Given user goes to "url"
    Then user fill mandatory fields
      | First Name | Last Name | Mobile Number |
      | Sinan      | SARIKAYA  | 0522266654    |
