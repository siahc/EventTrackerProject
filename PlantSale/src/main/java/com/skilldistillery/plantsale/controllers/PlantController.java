package com.skilldistillery.plantsale.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.plantsale.services.PlantService;

@RequestMapping("api")
@RestController
public class PlantController {
	
	@Autowired
	private PlantService svc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}
	

}
