import {Auctions} from '../models/auctions';
import {Offers} from '../models/offers';
import {AlertService} from '../services/alert.service';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OffersComponent implements OnInit {
  offers: Offers[] = [];
  auction: Auctions;
  constructor(private studentservice: StudentService, private alertService: AlertService) {}

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.studentservice.getOffers().subscribe(data => {this.offers = data.items;});
  }

  deleteOffer(idoffers: string) {
    this.studentservice.getAuctionId(idoffers).subscribe(data => {
      this.auction = data;
      this.studentservice.deleteOffer(idoffers, this.auction.idauctions).subscribe(response => this.refresh());
    },
      (err: HttpErrorResponse) => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
      }

    );

  }
  refresh(): void {
    window.location.reload();
  }
}
