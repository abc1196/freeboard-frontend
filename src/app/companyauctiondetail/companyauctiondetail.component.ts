import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Auctions} from '../models/auctions';
@Component({
  selector: 'app-companyauctiondetail',
  templateUrl: './companyauctiondetail.component.html',
  styleUrls: ['./companyauctiondetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyauctiondetailComponent implements OnInit {
  @Input() auction: Auctions;
  loading = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyservice: CompanyService) {

  }
  //read
  ngOnInit() {

    this.getAuctionById();
  }
  deleteAuction(idauction: string) {

  }
  getAuctionById() {
    console.log(this.route.snapshot.paramMap.get('idauctions'));
    this.companyservice.getAuctionById(this.route.snapshot.paramMap.get('idauctions'))
      .subscribe(data => {
        this.auction = data;
      });
  }
}
