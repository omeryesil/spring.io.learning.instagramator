Feature: User Login
  Scenario: Users logs into the application
    Given User browses the site
    And User sees the login page
    And User enters valid username and password
    And User clicks on Login button
    Then User sess the home page

