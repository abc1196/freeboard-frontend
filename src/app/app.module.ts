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
import {TransactionsService} from './services/transaction.service';
import {TextMaskModule} from 'angular2-text-mask';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { SearchauctionsComponent } from './searchauctions/searchauctions.component';
import { OffersComponent } from './offers/offers.component';
import { StudentofferdetailComponent } from './studentofferdetail/studentofferdetail.component';
import { StudentauctiondetailComponent } from './studentauctiondetail/studentauctiondetail.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { CompanyauctiondetailComponent } from './companyauctiondetail/companyauctiondetail.component';
import { CompanydetailComponent } from './companydetail/companydetail.component';
import { CompanyofferdetailComponent } from './companyofferdetail/companyofferdetail.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { PayresponsepageComponent } from './payresponsepage/payresponsepage.component';
import { PayformComponent } from './payform/payform.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

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
    StudentauctiondetailComponent,
    CompanyprofileComponent,
    CompanyauctiondetailComponent,
    CompanydetailComponent,
    CompanyofferdetailComponent,
    AuctionsComponent,
    PayresponsepageComponent,
    PayformComponent,
    FilterPipePipe
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
    StudentService,
    TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
