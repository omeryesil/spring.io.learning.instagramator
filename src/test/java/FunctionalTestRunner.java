import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by yesiome on 9/22/2016.
 */

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty", "html:reports/test-report"}, tags="@Implemented")
public class FunctionalTestRunner {
}
