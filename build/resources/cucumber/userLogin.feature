Feature: User Login

  @Implemented
  Scenario: Users logs into the application
    Given User browses the site and sees login page
    And User enters valid credentials and clicks login button
    Then User sees the home page

