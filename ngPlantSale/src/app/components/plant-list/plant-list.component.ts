import { Component, OnInit } from '@angular/core';

import { PlantsService } from './../../services/plants.service';
import { Plant } from './../../models/plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  private plants: Plant[] = [];

  constructor(private plantSvc: PlantsService) { }

  ngOnInit(): void {
    this.listPlants();
  }

  listPlants(): void{
    this.plantSvc.index().subscribe(
      data => {
        this.plants = data;
        console.log('listPlants() Loaded');

      },
      err => {
        console.error('List Plants',err);
      }
    )
  }

}
