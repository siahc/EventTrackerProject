import { Component, OnInit } from '@angular/core';

import { PlantsService } from './../../services/plants.service';
import { Plant } from './../../models/plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Plant[] = [];
  error: string = '';

  constructor(private plantSvc: PlantsService) { }

  ngOnInit(): void {
    this.listPlants();
  }

  listPlants(): void{
    this.plantSvc.list().subscribe(
      data => {
        this.plants = data;
        this.error = '';
        console.log('listPlants() Loaded');

      },
      err => {
        this.error = err;
        console.error('List Plants',err);
      }
    )
  }

  rowClick(id: number): void {
    window.location.href = "/plant/" + id
  }

}
