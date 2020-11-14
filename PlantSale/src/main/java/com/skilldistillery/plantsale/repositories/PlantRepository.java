package com.skilldistillery.plantsale.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.plantsale.entities.Plant;

public interface PlantRepository extends JpaRepository<Plant, Integer> {

}
