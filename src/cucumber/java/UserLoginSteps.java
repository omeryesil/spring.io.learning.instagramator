import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * Created by Omer on 9/20/2016.
 */


public class UserLoginSteps  extends BaseDriver {


    @Given("^User browses the site and sees login page$")
    public void userBrowsesTheSite() throws Throwable {
        logger.info("User browses the site");

        validatePresent("Login");
    }

    @And("^User enters valid credentials and clicks login button$")
    public void userEntersValidUsernameAndPassword() throws Throwable {
        logger.info("User enters valid username and password");
        setText("[name='email'", "test")
        .setText("[name='password'", "test")
        .click("#bntLogin");
        //.waitForWindow(".");
    }

    @Then("^User sees the home page$")
    public void userSeesTheHomePage() throws Throwable {
        logger.info("User sees the home page");

        validatePresent("home page");
    }
}
