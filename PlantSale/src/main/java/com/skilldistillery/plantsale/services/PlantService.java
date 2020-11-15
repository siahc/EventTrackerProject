package com.skilldistillery.plantsale.services;

import java.util.List;

import com.skilldistillery.plantsale.entities.Plant;

public interface PlantService {

	List<Plant> getAllPlants();
	
	Plant findById(int id);
	
	Plant createPlant(Plant plant);
	
	Plant updatePlant(int id, Plant plant);
	
	boolean deletePlant(int id);
	
}
