import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Auctions} from '../models/auctions';
import {Offers} from '../models/offers';
import {Students} from '../models/students';

import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-companyauctiondetail',
  templateUrl: './companyauctiondetail.component.html',
  styleUrls: ['./companyauctiondetail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CompanyauctiondetailComponent implements OnInit {
  auction: Auctions;
  loading = false;
  offer: Offers;
  offers: Offers[] = [];
  student: Students;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyservice: CompanyService,
    private alertService: AlertService) {
  }
  ngOnInit() {
    this.showOffers();
    this.getAuctionById();
  }

  showOffers() {
    this.companyservice.showOffers(this.route.snapshot.paramMap.get('idauctions')).subscribe(data => {this.offers = data.items;});
    console.log(this.offers);
  }
  selectWinnerOffer(idoffer: string) {
    this.companyservice.selectWinnerOffer(this.route.snapshot.paramMap.get('idauctions'), idoffer).subscribe(data => {this.offer = data;});
  }
  getAuctionById() {
    console.log(this.route.snapshot.paramMap.get('idauctions'));
    this.companyservice.getAuctionById(this.route.snapshot.paramMap.get('idauctions'))
      .subscribe(data => {
        this.auction = data;
      });
  }
  getStudent(idoffers: string) {
    this.router.navigate(['./company/companydetails/offerdetail/' + idoffers]);
  }
  save() {
    this.loading = true;
    console.log(this.auction.idauctions);
    this.companyservice.updateAuction(this.auction).subscribe(data => {
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
