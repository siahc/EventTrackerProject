import { Router, RouterModule } from '@angular/router';
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
  totalValue: number = 0;

  constructor(private plantSvc: PlantsService, private router: Router) { }

  ngOnInit(): void {
    this.listPlants();
  }
  listPlants(): void{
    this.plantSvc.list().subscribe(
      data => {
        this.plants = data;
        this.error = '';
        console.log('listPlants() Loaded');
        // ** data aggregation **
        this.totalValue = 0;
        for (let p of data) {
          this.totalValue += p.price
        }
      },
      err => {
        this.error = err;
        console.error('List Plants',err);
      }
    )
  }

  rowClick(id: number): void {
    this.router.navigateByUrl( "plant/" + id);
  }

}
