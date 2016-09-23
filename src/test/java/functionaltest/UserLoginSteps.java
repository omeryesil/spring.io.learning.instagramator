package functionaltest;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.ddavison.conductor.Browser;
import io.ddavison.conductor.Config;
import io.ddavison.conductor.Locomotive;


import java.util.logging.Logger;

@Config(browser = Browser.CHROME, url="http://localhost:8282")
public class UserLoginSteps  extends Locomotive {
    Logger logger = Logger.getLogger(UserLoginSteps.class.getName());

    @Given("^User browses the site and sees login page$")
    public void userBrowsesTheSite() throws Throwable {
        logger.info("User browses the site");

        validateText("#subTitle", "Login");
    }

    @And("^User enters valid credentials and clicks login button$")
    public void userEntersValidUsernameAndPassword() throws Throwable {
        logger.info("User enters valid username and password");

        setText("[name='email']", "test");
        setText("[name='password']", "test");

        validateText("[name='email'", "test");
        validateText("[name='password']", "test");

        click("#btnLogin");
    }

    @Then("^User sees the home page$")
    public void userSeesTheHomePage() throws Throwable {
        logger.info("User sees the home page");

        validateText("#subTitle", "Home");
        driver.quit();
    }

    @After
    public void closeBrowser() throws Exception {
        driver.quit();
    }

}
