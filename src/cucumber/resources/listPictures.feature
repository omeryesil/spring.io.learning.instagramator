Feature: List Instagram user images
  Scenario: User searches an existing instagram user
    Given Logged in user enters Instagram user Id into a textbox and clicks on Submit button
    Then User sees pictures from Instagram
    And Human faces on the pictures are highlighted


