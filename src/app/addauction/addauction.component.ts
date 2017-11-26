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
  encapsulation: ViewEncapsulation.Emulated
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
  selectedType = 0;
  model: any = {};
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
    this.companyservice.addAuction(this.model).subscribe(data => {
      this.alertService.success('Subasta agregada');
      this.loading = false;
      this.router.navigate(['/company/companydetails/myauctions']);
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
