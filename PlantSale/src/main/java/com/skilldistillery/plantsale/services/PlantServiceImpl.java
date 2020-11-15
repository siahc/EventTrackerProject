package com.skilldistillery.plantsale.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.plantsale.entities.Plant;
import com.skilldistillery.plantsale.repositories.PlantRepository;

@Service
public class PlantServiceImpl implements PlantService {

	@Autowired
	private PlantRepository plantRepo;

	@Override
	public List<Plant> getAllPlants() {
		return plantRepo.findAll();
	}

	@Override
	public Plant findById(int id) {
		Optional<Plant> plantOpt = plantRepo.findById(id);
		if (plantOpt.isPresent()) {
			return plantOpt.get();
		}
		return null;
	}

	@Override
	public Plant createPlant(Plant plant) {
		return plantRepo.saveAndFlush(plant);
	}

	@Override
	public Plant updatePlant(int id, Plant plant) {
		Plant p = this.findById(id);
		if (p == null) {
			return null;
		}
		// update any fields that were set from the input
		if (plant.getName() != null) {
			p.setName(plant.getName());
		}
		if (plant.getDescription() != null) {
			p.setDescription(plant.getDescription());
		}
		if (plant.getVariegation() != null) {
			p.setVariegation(plant.getVariegation());
		}
		if (plant.getPrice() != null) {
			p.setPrice(plant.getPrice());
		}
		if (plant.getRare() != null) {
			p.setRare(plant.getRare());
		}
		if (plant.getImage() != null) {
			p.setImage(plant.getImage());
		}
		
		return plantRepo.saveAndFlush(p);
	}

	@Override
	public boolean deletePlant(int id) {
		if (plantRepo.findById(id).isPresent()) {
			plantRepo.deleteById(id);
			return true;
		}
		return false;
	}

}
