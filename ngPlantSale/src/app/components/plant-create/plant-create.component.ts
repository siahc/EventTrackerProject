import { Component, OnInit } from '@angular/core';

import { PlantsService } from './../../services/plants.service';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.css']
})
export class PlantCreateComponent implements OnInit {

  plant: Plant = new Plant();
  status: string;

  constructor(private plantSvc: PlantsService) {}

  ngOnInit(): void {
  }

  createPlant(): void {
    this.plant.price = Math.round(this.plant.price * 100) / 100;
    this.plantSvc.create(this.plant).subscribe(
      p => {
        console.log(p);

        this.status = p.name + '(' + p.id + ') created successfully!';
        console.log('createPlants() Loaded', p);
      },
      err => {
        this.status = err;
        console.log('create Plants', err);

      }

    )

  }

}
