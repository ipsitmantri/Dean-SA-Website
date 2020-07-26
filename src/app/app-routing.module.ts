import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HcuComponent} from './hcu/hcu.component';
import {HousingComponent} from './housing/housing.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hcu', component: HcuComponent},
  {path: 'housing', component: HousingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
