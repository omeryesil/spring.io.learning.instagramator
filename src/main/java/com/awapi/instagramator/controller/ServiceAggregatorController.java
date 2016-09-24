package com.awapi.instagramator.controller;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

import com.awapi.instagramator.utilities.DisableSSLCertificateCheckUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * Created by yesiome on 9/22/2016.
 */


@RestController
@RequestMapping("/api/v1")
public class ServiceAggregatorController extends BaseController {


    public ServiceAggregatorController() throws KeyManagementException, NoSuchAlgorithmException {
    }

    @RequestMapping(value="/userlist", method= RequestMethod.GET)
    public String userlist () throws KeyManagementException, NoSuchAlgorithmException {
        return getStringProxy(environment.getProperty("Instagram_User_Service_Url"));
    }

}
