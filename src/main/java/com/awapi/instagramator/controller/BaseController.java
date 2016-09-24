package com.awapi.instagramator.controller;

import com.awapi.instagramator.utilities.DisableSSLCertificateCheckUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.client.RestTemplate;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

/**
 * Created by oyesi on 9/23/2016.
 */
public class BaseController {

    @Autowired
    protected Environment environment;

    public BaseController() throws KeyManagementException, NoSuchAlgorithmException {
        DisableSSLCertificateCheckUtil.disableChecks();
    }

    protected String getStringProxy (String serviceUrl)
    {
        RestTemplate restTemplate = new RestTemplate();
        String rtn = restTemplate.getForObject(serviceUrl, String.class);

        return rtn;
    }
}
