import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


import java.util.logging.Logger;

public class UserLoginSteps  extends BaseDriver {
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
}
