import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-companyauctiondetail',
  templateUrl: './companyauctiondetail.component.html',
  styleUrls: ['./companyauctiondetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyauctiondetailComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(
    private router: Router,
    private companyservice: CompanyService,
    private alertService: AlertService) {
  }
  ngOnInit() {
  }
  deleteAuction(idauction: string) {

  }

}
