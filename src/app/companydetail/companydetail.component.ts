import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Companies} from '../models/companies';
import {Offers} from '../models/offers';

import {CompanyService} from '../services/company.service';
@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanydetailComponent implements OnInit {
  [x: string]: any;
  companies: Companies;
  loading = false;
  constructor() {}

  ngOnInit() {
  }
  getCompany() {
    this.companyservice.getCompanyProfile().subscribe(data => {this.companies = data; });
  }
}

