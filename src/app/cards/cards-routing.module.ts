import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: 'cards/add', component: AddComponent},
  { path: 'cards/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }