import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantCreateComponent } from './components/plant-create/plant-create.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';


const routes: Routes = [
  {
    path: 'plant/:id',
    component: PlantDetailComponent
  },

  {
    path: 'create',
    component: PlantCreateComponent
  },

  {
    path: '',
    component: PlantListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
