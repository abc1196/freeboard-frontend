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
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';
import {StudentofferdetailComponent} from './studentofferdetail/studentofferdetail.component';
import {StudentprofileComponent} from './studentprofile/studentprofile.component';
import {WelcomeComponent} from './welcome/welcome.component';

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
      // otherwise redirect to welcome
      {path: '**', redirectTo: ''}
    ]
  },
  {
    path: 'student', component: StudentprofileComponent, children: [
      {path: 'studentdetails', component: StudentdetailsComponent},
      {path: 'searchauctions', component: SearchauctionsComponent},
      {path: 'myoffers', component: OffersComponent},
      {path: 'myoffers/:id', component: StudentofferdetailComponent}
    ]
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
