import {Auctions} from '../models/auctions';
import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-addauction',
  templateUrl: './addauction.component.html',
  styleUrls: ['./addauction.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddauctionComponent implements OnInit {
  types = [
    {num: 0, name: 'Todos los tipos'},
    {num: 1, name: 'Cartel Publicitario'},
    {num: 2, name: 'Video Publicitario'},
    {num: 3, name: 'Logo'},
    {num: 4, name: 'Landing Page'},
    {num: 5, name: 'Aplicación Móvil'}
  ];
  auction: Auctions;
  loading = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private companyservice: CompanyService,
    private alertService: AlertService) {}
  ngOnInit() {
  }
  save() {
    this.loading = true;
    console.log(this.auction.idauctions);
    this.companyservice.addAuction(this.auction).subscribe(data => {
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
