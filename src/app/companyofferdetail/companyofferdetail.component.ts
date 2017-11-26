import {Auctions} from '../models/auctions';
import {Offers} from '../models/offers';
import {Students} from '../models/students';
import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {StudentService} from '../services/student.service';
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

  student: Students;
  loading = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private studentservice: StudentService,
    private companyservice: CompanyService,
    private alertService: AlertService) {
    this.getStudent();
  }

  ngOnInit() {
    this.getStudent();
  }
  getStudent() {
    console.log(this.route.snapshot.paramMap.get('idoffers'));
    this.companyservice.getStudentByOffer(this.route.snapshot.paramMap.get('idoffers')).subscribe(data => {
      this.student = data;
    });
  }
  selectWinnerOffer() {
    this.companyservice.selectWinnerOffer(this.route.snapshot.paramMap.get('idauctions'), this.route.snapshot.paramMap.get('idoffers')).subscribe(data => {
      this.alertService.success('Oferta aceptada');
      this.loading = false;
    },
      (err: HttpErrorResponse) => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(err);
        this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
        this.loading = false;
      });
    this.router.navigate(['/company/companydetails/myauctions/' + this.route.snapshot.paramMap.get('idauctions')]);
  }

}
