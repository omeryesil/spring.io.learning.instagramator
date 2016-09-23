$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("listPictures.feature");
formatter.feature({
  "line": 2,
  "name": "List Instagram user images",
  "description": "",
  "id": "list-instagram-user-images",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Implemented"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "User searches an existing instagram user",
  "description": "",
  "id": "list-instagram-user-images;user-searches-an-existing-instagram-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User browses the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username into the text box and clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Media files belong to the username get listed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Human faces on the images get highlighted",
  "keyword": "And "
});
formatter.match({
  "location": "ListInstragramUserImagesSteps.userBrowsesTheHomePage()"
});
formatter.result({
  "duration": 4650881224,
  "status": "passed"
});
formatter.match({
  "location": "ListInstragramUserImagesSteps.userEntersUsernameIntoTheTextBoxAndClicksOnSubmitButton()"
});
formatter.result({
  "duration": 448996315,
  "status": "passed"
});
formatter.match({
  "location": "ListInstragramUserImagesSteps.mediaFilesBelongToTheUsernameGetListed()"
});
formatter.result({
  "duration": 2157748,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat functionaltest.ListInstragramUserImagesSteps.mediaFilesBelongToTheUsernameGetListed(ListInstragramUserImagesSteps.java:40)\r\n\tat ✽.Then Media files belong to the username get listed(listPictures.feature:6)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "ListInstragramUserImagesSteps.humanFacesOnTheImagesGetHighlighted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1079782074,
  "status": "passed"
});
formatter.after({
  "duration": 3117586590,
  "status": "passed"
});
formatter.uri("userLogin.feature");
formatter.feature({
  "line": 2,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Implemented"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Users logs into the application",
  "description": "",
  "id": "user-login;users-logs-into-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User browses the site and sees login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid credentials and clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User sees the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLoginSteps.userBrowsesTheSite()"
});
formatter.result({
  "duration": 2579965786,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userEntersValidUsernameAndPassword()"
});
formatter.result({
  "duration": 757465598,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userSeesTheHomePage()"
});
formatter.result({
  "duration": 1132922365,
  "status": "passed"
});
formatter.after({
  "duration": 3156155924,
  "status": "passed"
});
formatter.after({
  "duration": 79643,
  "status": "passed"
});
});