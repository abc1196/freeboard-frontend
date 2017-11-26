import {Offers} from '../models/offers';
import {Students} from '../models/students';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-companyofferdetail',
  templateUrl: './companyofferdetail.component.html',
  styleUrls: ['./companyofferdetail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CompanyofferdetailComponent implements OnInit {

  offer: Offers;
  student: Students;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyservice: CompanyService) {
    this.getStudent();
  }

  ngOnInit() {
  }
  getStudent() {
    console.log(this.route.snapshot.paramMap.get('idoffers'));
    this.companyservice.getStudentByOffer(this.route.snapshot.paramMap.get('idoffers')).subscribe(data => {
      this.student = data;
    });
  }
  selectWinnerOffer(idoffer: string) {
    this.companyservice.selectWinnerOffer(this.route.snapshot.paramMap.get('idauctions'), idoffer).subscribe(data => {this.offer = data;});
    this.router.navigate(['./company/companydetails']);
  }

}
