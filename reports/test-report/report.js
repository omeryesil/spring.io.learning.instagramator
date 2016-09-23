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
  "duration": 17103628866,
  "error_message": "java.lang.AssertionError: Could not find By.cssSelector: #subTitle after 5 seconds\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat io.ddavison.conductor.Locomotive.waitForElement(Locomotive.java:241)\r\n\tat io.ddavison.conductor.Locomotive.getText(Locomotive.java:338)\r\n\tat io.ddavison.conductor.Locomotive.validateText(Locomotive.java:589)\r\n\tat io.ddavison.conductor.Locomotive.validateText(Locomotive.java:585)\r\n\tat functionaltest.ListInstragramUserImagesSteps.userBrowsesTheHomePage(ListInstragramUserImagesSteps.java:28)\r\n\tat ✽.Given User browses the home page(listPictures.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ListInstragramUserImagesSteps.userEntersUsernameIntoTheTextBoxAndClicksOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ListInstragramUserImagesSteps.mediaFilesBelongToTheUsernameGetListed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ListInstragramUserImagesSteps.humanFacesOnTheImagesGetHighlighted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1704081008,
  "status": "passed"
});
formatter.after({
  "duration": 7321693573,
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
  "duration": 13072003351,
  "error_message": "java.lang.AssertionError: Could not find By.cssSelector: #subTitle after 5 seconds\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat io.ddavison.conductor.Locomotive.waitForElement(Locomotive.java:241)\r\n\tat io.ddavison.conductor.Locomotive.getText(Locomotive.java:338)\r\n\tat io.ddavison.conductor.Locomotive.validateText(Locomotive.java:589)\r\n\tat io.ddavison.conductor.Locomotive.validateText(Locomotive.java:585)\r\n\tat functionaltest.UserLoginSteps.userBrowsesTheSite(UserLoginSteps.java:22)\r\n\tat ✽.Given User browses the site and sees login page(userLogin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserLoginSteps.userEntersValidUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserLoginSteps.userSeesTheHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7335415753,
  "status": "passed"
});
formatter.after({
  "duration": 1194678737,
  "status": "passed"
});
});