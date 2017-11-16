import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AlertComponent} from './alert/alert.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginstudentComponent} from './loginstudent/loginstudent.component';
import {LogincompanyComponent} from './logincompany/logincompany.component';
import {RegisterstudentComponent} from './registerstudent/registerstudent.component';
import {AlertService} from './services/alert.service';
import {AuthenticationService} from './services/authentication.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    LoginstudentComponent,
    LogincompanyComponent,
    RegisterstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
