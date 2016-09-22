$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userLogin.feature");
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
  "duration": 5638303995,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userEntersValidUsernameAndPassword()"
});
formatter.result({
  "duration": 646404589,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginSteps.userSeesTheHomePage()"
});
formatter.result({
  "duration": 1525395822,
  "status": "passed"
});
});