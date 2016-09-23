package com.awapi.instagramator.controllers;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

import com.awapi.instagramator.utilities.DisableSSLCertificateCheckUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * Created by yesiome on 9/22/2016.
 */


@RestController
public class InstragramatorController {

    @RequestMapping(value="/api/v1/userlist", method= RequestMethod.GET)
    public String userList () throws KeyManagementException, NoSuchAlgorithmException {

        DisableSSLCertificateCheckUtil.disableChecks();

        RestTemplate restTemplate = new RestTemplate();
        String rtn = restTemplate.getForObject("https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user", String.class);

        return rtn;
    }

}
