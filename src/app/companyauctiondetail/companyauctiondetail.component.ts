import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Auctions} from '../models/auctions';
import {Offers} from '../models/offers';
@Component({
  selector: 'app-companyauctiondetail',
  templateUrl: './companyauctiondetail.component.html',
  styleUrls: ['./companyauctiondetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyauctiondetailComponent implements OnInit {
  @Input() auction: Auctions;
  loading = false;
  offer: Offers;
  offers: Offers[] = [];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyservice: CompanyService) {
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
}
