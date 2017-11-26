import {AddauctionComponent} from './addauction/addauction.component';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './home/home.component';
import {LogincompanyComponent} from './logincompany/logincompany.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginstudentComponent} from './loginstudent/loginstudent.component';
import {OffersComponent} from './offers/offers.component';
import {RegistercompanyComponent} from './registercompany/registercompany.component';
import {RegisterstudentComponent} from './registerstudent/registerstudent.component';
import {SearchauctionsComponent} from './searchauctions/searchauctions.component';
import {StudentauctiondetailComponent} from './studentauctiondetail/studentauctiondetail.component';
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';
import {StudentofferdetailComponent} from './studentofferdetail/studentofferdetail.component';
import {StudentprofileComponent} from './studentprofile/studentprofile.component';
import {WelcomeComponent} from './welcome/welcome.component';

import {CompanyauctiondetailComponent} from './companyauctiondetail/companyauctiondetail.component';
import {CompanydetailComponent} from './companydetail/companydetail.component';
import {CompanyofferdetailComponent} from './companyofferdetail/companyofferdetail.component';
import {CompanyprofileComponent} from './companyprofile/companyprofile.component';
import {AuctionsComponent} from './auctions/auctions.component';
import {CompanymenuComponent} from './companymenu/companymenu.component';
import {StudentmenuComponent} from './studentmenu/studentmenu.component';
import {StudentexperienceComponent} from './studentexperience/studentexperience.component';
import {PayformComponent} from './payform/payform.component';
const routes: Routes = [
  {path: '', redirectTo: '/home/welcome', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: '/welcome', pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'loginstudent', component: LoginstudentComponent},
      {path: 'registerstudent', component: RegisterstudentComponent},
      {path: 'logincompany', component: LogincompanyComponent},
      {path: 'registercompany', component: RegistercompanyComponent},
      {path: 'payform', component: PayformComponent},
      // otherwise redirect to welcome
      {path: '**', redirectTo: ''}
    ]
  },
  {
    path: 'student', component: StudentprofileComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/student/studentdetails', pathMatch: 'full'},
      {path: 'searchauctions', component: SearchauctionsComponent},
      {path: 'searchauctions/:idauctions', component: StudentauctiondetailComponent},
      {
        path: 'studentdetails', component: StudentmenuComponent, children: [
          {path: '', redirectTo: '/student/studentdetails/myoffers', pathMatch: 'full'},
          {path: 'account', component: StudentdetailsComponent},
          {path: 'experience', component: StudentexperienceComponent},
          {path: 'myoffers', component: OffersComponent},
          {path: 'myoffers/:idoffers', component: StudentofferdetailComponent}]

      }]
  }, {
    path: 'company', component: CompanyprofileComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/company/companydetails/myauctions', pathMatch: 'full'},
      {
        path: 'companydetails', component: CompanymenuComponent, children: [
          {path: '', redirectTo: '/company/companydetails/account', pathMatch: 'full'},
          {path: 'addauction', component: AddauctionComponent},
          {path: 'account', component: CompanydetailComponent},
          {path: 'myauctions', component: AuctionsComponent},
          {path: 'offerdetail/:idoffers/:idauctions', component: CompanyofferdetailComponent},
          {path: 'myauctions/:idauctions', component: CompanyauctiondetailComponent}]
      }]

  },
  {
    path: 'payOffer', component: PayformComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/payOffer', pathMatch: 'full'},
      {path: 'payOffer/:idoffer', component: PayformComponent}]
  }
  ,
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
