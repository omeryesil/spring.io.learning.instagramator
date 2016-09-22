import io.ddavison.conductor.Browser;
import io.ddavison.conductor.Config;
import io.ddavison.conductor.Locomotive;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.logging.Logger;

/**
 * Created by yesiome on 9/21/2016.
 */
@Config(browser = Browser.CHROME, url="http://localhost:8282")
public class BaseDriver extends Locomotive {
    protected static final Logger logger = Logger.getLogger(UserLoginSteps.class.getName());

/*    public BaseDriver() {
        driver = DisableChromePlugInPopUp();
    }

    private WebDriver DisableChromePlugInPopUp()
    {
        System.setProperty("webdriver.chrome.driver", "C:\\_gitHub\\spring.io.learning.instagramator\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-extensions");
        options.addArguments("--ignore-certificate-errors");
        return new ChromeDriver(options);
    }

    */
}
