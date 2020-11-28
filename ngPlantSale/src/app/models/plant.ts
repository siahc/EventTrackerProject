export class Plant {
  id: string;
  name: string;
  description: string;
  variegation: boolean;
  price: number;
  rare: boolean;
  image: string;

  constructor(
    id?: string,
    name?: string,
    description?: string,
    variegation?: boolean,
    price?: number,
    rare?: boolean,
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
