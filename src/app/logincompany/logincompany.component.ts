import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {AuthenticationService} from '../services/authentication.service';
import {CompanyService} from '../services/company.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  moduleId: module.id,
  selector: 'app-logincompany',
  templateUrl: './logincompany.component.html',
  styleUrls: ['./logincompany.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogincompanyComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private companyservice: CompanyService) {}

  ngOnInit() {
    this.authenticationService.logout();

  }

  loginCompany() {
    this.loading = true;
    this.authenticationService.loginCompany(this.model.email, this.model.password)
      .subscribe(
      data => {
        this.alertService.success('Login Succesful');
        this.loading = false;
        this.router.navigate(['/company']);
      }, err => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        const el = JSON.parse(err._body);
        console.log(el.error.message);
        this.alertService.error(el.error.message);
        this.loading = false;
      }
      );
  }


}
