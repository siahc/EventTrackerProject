import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { PlantsService } from './../../services/plants.service';
import { Plant } from '../../models/plant';


@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  id: number;
  plant: Plant = new Plant();
  error: string;

  constructor(route: ActivatedRoute, private plantSvc: PlantsService) {
    route.params.pipe(map(p => p.id)).subscribe(
      id => {
        this.id = id
      }
    )
  }

  ngOnInit(): void {
    this.getPlant()
  }

  getPlant(): void {
    this.plantSvc.get(this.id).subscribe(
      p => {
        this.plant = p
        this.error = '';
        console.log('getPlants() Loaded', p);
      },
      err => {
        this.error = err;
        console.error('get Plants',err);
      }
    )
  }

  updatePlant(): void {
    this.plantSvc.update(this.plant).subscribe(
      p => {
        console.log(p);

        this.error = '';
        console.log('updatePlants() Loaded', p);
      },
      err => {
        this.error = err;
        console.error('update Plants',err);
      }
    )
  }

  deletePlant(): void {
    this.plantSvc.delete(this.id).subscribe(
      p => {
        this.plant = new Plant();
        this.error = '';
        console.log('deletePlants() Loaded', p);
        window.location.href = ''
      },
      err => {
        this.error = err;
        console.error('delete Plants',err);
      }
    )
  }

}
