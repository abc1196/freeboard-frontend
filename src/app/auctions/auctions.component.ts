import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Companies} from '../models/companies';
import {Auctions} from '../models/auctions';
import {CompanyService} from '../services/company.service';
@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionsComponent implements OnInit {
  auction: Auctions;
  companyservice: CompanyService;
  constructor() {}

  ngOnInit() {
  }

  deleteAuction(idauction: string) {
    this.companyservice.getAuctionById(idauction).subscribe(data => {
      this.auction = data;
      this.companyservice.deleteAuction(this.auction.idauction).subscribe(response => this.refresh());
    }
      //  (err: HttpErrorResponse) => {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      //  this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
      // }

    );

  }

  refresh(): void {
    window.location.reload();
  }
}
