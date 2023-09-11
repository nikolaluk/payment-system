import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsRoutingModule } from './cards-routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AddComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    CardsRoutingModule,
  ]
})
export class CardsModule { }
