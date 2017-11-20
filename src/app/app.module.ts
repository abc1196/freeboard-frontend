import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {RegisterComponent} from './register/register.component';
import {AlertComponent} from './alert/alert.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginstudentComponent} from './loginstudent/loginstudent.component';
import {LogincompanyComponent} from './logincompany/logincompany.component';
import {RegisterstudentComponent} from './registerstudent/registerstudent.component';
import {AlertService} from './services/alert.service';
import {AuthenticationService} from './services/authentication.service';
import {AppRoutingModule} from './/app-routing.module';
import {RegistercompanyComponent} from './registercompany/registercompany.component';
import {CompanyService} from './services/company.service';
import {StudentService} from './services/student.service';
import {TextMaskModule} from 'angular2-text-mask';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { SearchauctionsComponent } from './searchauctions/searchauctions.component';
import { OffersComponent } from './offers/offers.component';
import { StudentofferdetailComponent } from './studentofferdetail/studentofferdetail.component';
import { StudentauctiondetailComponent } from './studentauctiondetail/studentauctiondetail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent,
    LoginstudentComponent,
    LogincompanyComponent,
    RegisterstudentComponent,
    RegistercompanyComponent,
    HomeComponent,
    WelcomeComponent,
    StudentprofileComponent,
    StudentdetailsComponent,
    SearchauctionsComponent,
    OffersComponent,
    StudentofferdetailComponent,
    StudentauctiondetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    CompanyService,
    StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
