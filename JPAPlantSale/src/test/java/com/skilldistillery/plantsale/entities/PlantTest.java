package com.skilldistillery.plantsale.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PlantTest {
	
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Plant plant;
	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("PlantPU");
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		plant = em.find(Plant.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		plant = null;
	}

	@Test
	void test_Plant_entity_mapping() {
		assertNotNull(plant);
		assertEquals("Monstera", plant.getName());
		assertEquals("Large, fenestrated leaves", plant.getDescription());
		assertEquals(true, plant.getVariegation());
		assertEquals(450.0, plant.getPrice());
		assertEquals(true, plant.getRare());
		assertEquals(null, plant.getImage());
		
	}

}
