import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HcuComponent} from './hcu/hcu.component';
import {StudentSupportComponent} from './student-support/student-support.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'hcu', component: HcuComponent},
  {path: 'support', component: StudentSupportComponent},
  {path: 'contact', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
