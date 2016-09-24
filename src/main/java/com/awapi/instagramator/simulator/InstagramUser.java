package com.awapi.instagramator.simulator;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;

/**
 * Created by oyesi on 9/23/2016.
 */

@RestController
@RequestMapping ("/api/simulator")
public class InstagramUser {

    @RequestMapping("/instagram_user")
    public String instagram_user(){
        String returnValue =
                "{\"_embedded\":{\"instagram_user\":[{\"id\":1,\"instagramUsername\":\"daniel.yinanc\",\"instagramId\":3822747321,\"_links\":{\"self\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/1\"},\"instagramUser\":" +
                        "{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/1\"},\"instagramMedia\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/1/instagramMedia\"}}},{\"id\":2,\"instagramUsername\":\"danielyinanc\",\"instagramId\":3866257457,\"_links\":" +
                        "{\"self\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/2\"},\"instagramUser\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/2\"}," +
                        "\"instagramMedia\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/2/instagramMedia\"}}},{\"id\":3,\"instagramUsername\":\"CrianaP\",\"instagramId\":2301393954,\"_links\":{\"self\":" +
                        "{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/3\"},\"instagramUser\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/3\"},\"instagramMedia\":" +
                        "{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/3/instagramMedia\"}}},{\"id\":4,\"instagramUsername\":\"razz_matazz\",\"instagramId\":3858765144,\"_links\":{\"self\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/4\"}," +
                        "\"instagramUser\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/4\"},\"instagramMedia\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/4/instagramMedia\"}}}]}," +
                        "\"_links\":{\"self\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user\"},\"profile\":{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/profile/instagram_user\"},\"search\":" +
                        "{\"href\":\"https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user/search\"}},\"page\":{\"size\":20,\"totalElements\":4,\"totalPages\":1,\"number\":0}}";

        return returnValue;
    }
}
