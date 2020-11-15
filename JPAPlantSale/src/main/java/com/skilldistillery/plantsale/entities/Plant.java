package com.skilldistillery.plantsale.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Plant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	  private int id;
	  
	  public String name;
	  
	  public String description;
	  
	  public Boolean variegation;
	  
	  public Double price;
	  
	  public Boolean rare;
	  
	  public String image;
	  
	  
	  
	  
	 
	// methods


	public Plant() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getVariegation() {
		return variegation;
	}

	public void setVariegation(Boolean variegation) {
		this.variegation = variegation;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Boolean getRare() {
		return rare;
	}

	public void setRare(Boolean rare) {
		this.rare = rare;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Plant(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((price == null) ? 0 : price.hashCode());
		result = prime * result + ((rare == null) ? 0 : rare.hashCode());
		result = prime * result + ((variegation == null) ? 0 : variegation.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Plant other = (Plant) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (price == null) {
			if (other.price != null)
				return false;
		} else if (!price.equals(other.price))
			return false;
		if (rare == null) {
			if (other.rare != null)
				return false;
		} else if (!rare.equals(other.rare))
			return false;
		if (variegation == null) {
			if (other.variegation != null)
				return false;
		} else if (!variegation.equals(other.variegation))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Plant [id=" + id + ", name=" + name + ", description=" + description + ", variegation=" + variegation
				+ ", price=" + price + ", rare=" + rare + ", image=" + image + "]";
	}
}
