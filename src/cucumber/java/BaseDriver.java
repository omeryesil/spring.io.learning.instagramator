import io.ddavison.conductor.Browser;
import io.ddavison.conductor.Config;
import io.ddavison.conductor.Locomotive;

import java.util.logging.Logger;

/**
 * Created by yesiome on 9/21/2016.
 */
@Config(browser = Browser.FIREFOX, url="http://localhost:8282")
public class BaseDriver extends Locomotive {
    protected static final Logger logger = Logger.getLogger(UserLoginSteps.class.getName());
}
