import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Companies} from '../models/companies';
import {Auctions} from '../models/auctions';
import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AuctionsComponent implements OnInit {
  auction: Auctions;
  auctions: Auctions[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyservice: CompanyService,
    private alertService: AlertService) {}

  ngOnInit() {

    this.getAllAuctions();
  }

  getAllAuctions() {
    this.companyservice.getAllAuctions().subscribe(data => {this.auctions = data.items;});
  }
  deleteAuction(idauctions: string) {
    this.companyservice.deleteAuction(idauctions).subscribe(response => this.refresh());
  }

  refresh(): void {
    window.location.reload();
  }
}

