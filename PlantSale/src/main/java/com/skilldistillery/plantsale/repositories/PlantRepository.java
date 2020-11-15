package com.skilldistillery.plantsale.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.plantsale.entities.Plant;

public interface PlantRepository extends JpaRepository<Plant, Integer> {
	
}
