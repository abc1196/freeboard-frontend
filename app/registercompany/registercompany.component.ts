import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistercompanyComponent implements OnInit {

  mask: any[] = ['+', /\d{1,3}/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  model: any = {};
  loading = false;
  constructor(private router: Router,
    private companyService: CompanyService,
    private alertService: AlertService) {}

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.companyService.signUpCompany(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/logincompany']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
