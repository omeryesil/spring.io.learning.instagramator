package functionaltest;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.ddavison.conductor.Browser;
import io.ddavison.conductor.Config;
import io.ddavison.conductor.Locomotive;

import java.util.logging.Logger;

@Config(browser = Browser.CHROME, url="http://localhost:8282/#/home")
public class ListInstragramUserImagesSteps extends Locomotive {

    Logger logger = Logger.getLogger(ListInstragramUserImagesSteps.class.getName());

    @After
    public void closeBrowser() throws Exception {
        driver.quit();
    }

    @Given("^User browses the home page$")
    public void userBrowsesTheHomePage() throws Throwable {
        logger.info("User browses the site");

        validateText("#subTitle", "Home");
    }

    @And("^User enters username into the text box and clicks on Submit button$")
    public void userEntersUsernameIntoTheTextBoxAndClicksOnSubmitButton() throws Throwable {
        setText("#instagramUserId", "omer.yesil")
                .click("#btnReceiveMedia");
    }

    @Then("^Media files belong to the username get listed$")
    public void mediaFilesBelongToTheUsernameGetListed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Human faces on the images get highlighted$")
    public void humanFacesOnTheImagesGetHighlighted() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
