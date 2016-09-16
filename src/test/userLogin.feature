Feature: User Login
  To allow users to login to get access all features

  Scenario: User enters valid email and password
    Given: User browses the login page
    And: Enters valid username and password
    When: Clicks on the login button
    Then: The browser redirects to the home page

  Scenario: USer enters invalid email and password
    Given: User browses the login page
    And: Enters invalid email and password
    When: Clicks on the login button
    Then: The application shows invalid username and password message





