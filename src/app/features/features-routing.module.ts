import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { CardsComponent } from './cards/cards.component';
import { MoreComponent } from './more/more.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'payments', component: PaymentsComponent, canActivate: [AuthGuard]},
    { path: 'cards', component: CardsComponent, canActivate: [AuthGuard]},
    { path: 'more', component: MoreComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
