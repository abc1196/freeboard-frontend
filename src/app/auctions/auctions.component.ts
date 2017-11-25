import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Companies} from '../models/companies';
import {Auctions} from '../models/auctions';
import {CompanyService} from '../services/company.service';
import {ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionsComponent implements OnInit {
  auction: Auctions;
  auctions: Auctions[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyservice: CompanyService) {}

  ngOnInit() {

    this.getAllAuctions();
  }

  getAllAuctions() {
    this.companyservice.getAllAuctions().subscribe(data => {this.auctions = data.items;});
  }


  refresh(): void {
    window.location.reload();
  }
}
