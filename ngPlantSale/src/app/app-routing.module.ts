import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';


const routes: Routes = [
  {
    path: 'plant/:id',
    component: PlantDetailComponent
  },
  {
    path: '',
    component: PlantListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
