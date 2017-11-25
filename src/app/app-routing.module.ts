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
      {path: 'studentdetails', component: StudentdetailsComponent},
      {path: 'searchauctions', component: SearchauctionsComponent},
      {path: 'myoffers', component: OffersComponent},
      {path: 'myoffers/:idoffers', component: StudentofferdetailComponent},
      {path: 'searchauctions/:id', component: StudentauctiondetailComponent}
    ]
  }, {
    path: 'company', component: CompanyprofileComponent, canActivate: [AuthGuard], children: [
       {path: '', redirectTo: '/company/companydetails', pathMatch: 'full'},
      {path: 'companydetails', component: CompanydetailComponent},
      {path: 'myauctions', component: AuctionsComponent},
      {path: 'offerdetail', component: CompanyofferdetailComponent},
      {path: 'myauctions/:idauctions', component: CompanyauctiondetailComponent}]
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
