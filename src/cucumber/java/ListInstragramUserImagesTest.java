import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.ddavison.conductor.Browser;
import io.ddavison.conductor.Config;


@Config(
        browser = Browser.CHROME,
        url = "http://localhost:8282"
)


public class ListInstragramUserImagesTest {
    @Given("^Logged in user enters Instagram user Id into a textbox and clicks on Submit button$")
    public void loggedInUserEntersInstagramUserIdIntoATextboxAndClicksOnSubmitButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^User sees pictures from Instagram$")
    public void userSeesPicturesFromInstagram() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^Human faces on the pictures are highlighted$")
    public void humanFacesOnThePicturesAreHighlighted() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
