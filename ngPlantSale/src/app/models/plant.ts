export class Plant {
  id: string;
  name: string;
  description: string;
  variegation: string;
  price: string;
  rare: string;
  image: string;

  constructor(
    id?: string,
    name?: string,
    description?: string,
    variegation?: string,
    price?: string,
    rare?: string,
    image?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.variegation = variegation;
    this.price = price;
    this.rare = rare;
    this.image = image;
  }
}
