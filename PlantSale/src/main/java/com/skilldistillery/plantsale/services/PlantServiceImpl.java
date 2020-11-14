package com.skilldistillery.plantsale.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.plantsale.entities.Plant;
import com.skilldistillery.plantsale.repositories.PlantRepository;

@Service
public class PlantServiceImpl implements PlantService {

	@Autowired
	private PlantRepository repo;
	
	@Override
	public List<Plant> getAllPlants() {
		// TODO Auto-generated method stub
		return null;
	}

}
