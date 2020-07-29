import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HcuComponent } from './hcu/hcu.component';
import { HousingComponent } from './housing/housing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentSupportComponent } from './student-support/student-support.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DeansaComponent } from './deansa/deansa.component';
import { AdeansaComponent } from './adeansa/adeansa.component';
import { HcuofficeComponent } from './hcuoffice/hcuoffice.component';
import { GscouncilsComponent } from './gscouncils/gscouncils.component';
import { IbComponent } from './ib/ib.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HcuComponent,
    HousingComponent,
    StudentSupportComponent,
    ContactUsComponent,
    DeansaComponent,
    AdeansaComponent,
    HcuofficeComponent,
    GscouncilsComponent,
    IbComponent,
    MediaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule,
        SidebarModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatSidenavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
