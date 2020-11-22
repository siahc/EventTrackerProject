package com.skilldistillery.plantsale.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.plantsale.entities.Plant;
import com.skilldistillery.plantsale.services.PlantService;

@RequestMapping("api")
@RestController
public class PlantController {
	
	@Autowired
	private PlantService plantSvc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}
	
	@GetMapping("plants")
	public List<Plant> getPlants() {
		return plantSvc.getAllPlants();
	}
	
	@GetMapping("plants/{id}")
	public Plant findPlant(
		@PathVariable int id,
		HttpServletResponse response
	) {
		if( id < 1) {
			response.setStatus(400);
			return null;
		}
	
		Plant p = plantSvc.findById(id);
		if (p == null) {
			response.setStatus(404);
		}
		return p;
	}
	
	@PutMapping("plants")
	public Plant createPlants(
		@RequestBody Plant plant,
		HttpServletRequest request,
		HttpServletResponse response
	) {	
		if(plant == null) {
			response.setStatus(400);
			return null;
		}
		if(plant.getPrice() != null && plant.getPrice().isNaN()) {
			response.setStatus(400);
			return null;
		}
		if(plant.getPrice() != null && plant.getPrice() < 0) {
			response.setStatus(400);
			return null;
		}
		Plant p = plantSvc.createPlant(plant);
		if (p == null) {
			response.setStatus(409);
		} else {
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(p.getId());
			response.setHeader("Location", url.toString());
		}
		return p;
	}
	
	@PatchMapping("plants/{id}")
	public Plant updatePlant(
		@PathVariable int id,
		@RequestBody Plant plant,
		HttpServletResponse response
	) {
		if(plant == null) {
			response.setStatus(400);
			return null;
		}
		if(plant.getPrice() != null && plant.getPrice() < 0) {
			response.setStatus(400);
			return null;
		}
		try {
			plant = plantSvc.updatePlant(id, plant);
			if (plant == null) {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(500);
			plant = null;
		}
		return plant;
	}
	
	@DeleteMapping("plants/{id}")
	public void deletePlant(
		@PathVariable int id,
		HttpServletResponse response
	) {
		if( id < 1) {
			response.setStatus(400);
			return;
		}
	
		if (plantSvc.deletePlant(id)) {
			response.setStatus(204);
			return;
		}
		
		response.setStatus(404);
	}
}




