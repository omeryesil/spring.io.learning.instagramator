@Implemented
Feature: List Instagram user images
  Scenario: User searches an existing instagram user
    Given User browses the home page
    And User enters username into the text box and clicks on Submit button
    Then Media files belong to the username get listed
    And Human faces on the images get highlighted


