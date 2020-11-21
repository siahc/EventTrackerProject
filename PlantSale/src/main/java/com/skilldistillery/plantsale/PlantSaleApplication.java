package com.skilldistillery.plantsale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PlantSaleApplication extends SpringBootServletInitializer {

	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(PlantSaleApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(PlantSaleApplication.class, args);
	}

}
