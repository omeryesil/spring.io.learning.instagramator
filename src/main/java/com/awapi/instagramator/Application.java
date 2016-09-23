package com.awapi.instagramator;

import com.awapi.instagramator.controller.AppErrorController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Omer on 9/15/2016.
 */

@SpringBootApplication (scanBasePackages="com.awapi.instagramator.controller")
//@Configuration
//@ComponentScan(basePackages = "com.awapi.instagramator.controller")
//@EnableAutoConfiguration
public class Application {

    public static void main (String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Autowired
    private ErrorAttributes errotAttirubutes;

    @Bean
    public AppErrorController appErrorController(){
        return new AppErrorController(errotAttirubutes);
    }

}
