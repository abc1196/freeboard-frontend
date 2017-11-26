import {Companies} from '../models/companies';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-companymenu',
  templateUrl: './companymenu.component.html',
  styleUrls: ['./companymenu.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CompanymenuComponent implements OnInit {
  companies: Companies;
  constructor(private companyservice: CompanyService, private route: ActivatedRoute,
    private router: Router) {
    this.getCompany();
  }

  ngOnInit() {
  }

  getCompany() {
    this.companyservice.getCompanyProfile().subscribe(data => {this.companies = data;});
  }


}
