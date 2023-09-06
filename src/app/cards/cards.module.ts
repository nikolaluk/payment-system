import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsRoutingModule } from './cards-routing.module';



@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    CardsRoutingModule,
  ]
})
export class CardsModule { }
