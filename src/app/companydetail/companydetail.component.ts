import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Companies} from '../models/companies';
import {CompanyService} from '../services/company.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CompanydetailComponent implements OnInit {
  companies: Companies;
  loading = false;
  constructor(private companyservice: CompanyService,
    private alertService: AlertService) {
    this.getCompany();
  }

  ngOnInit() {
  }
  getCompany() {
    this.companyservice.getCompanyProfile().subscribe(data => {this.companies = data; });
  }
  save() {
    this.loading = true;
    console.log(this.companies);
    this.companyservice.updateCompany(this.companies).subscribe(data => {
      this.alertService.success('Cambios Guardados');
      this.loading = false;
    },
      (err: HttpErrorResponse) => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(err);
        this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
        this.loading = false;
      });
  }
}

