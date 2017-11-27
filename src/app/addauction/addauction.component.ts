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
        { num: 0, name: 'Cartel Publicitario' },
        { num: 1, name: 'Video Publicitario' },
        { num: 2, name: 'Logo' },
        { num: 3, name: 'Landing Page' },
        { num: 4, name: 'Aplicación Móvil' }
    ];
    selectedType = 0;
    model: any = {};
    auction: Auctions;
    loading = false;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private companyservice: CompanyService,
        private alertService: AlertService) { }
    ngOnInit() {
    }
    save() {
        this.loading = true;
        this.companyservice.addAuction(this.model).subscribe(data => {
            this.alertService.success('Subasta agregada');
            this.loading = false;
            //  this.router.navigate(['/company/companydetails/myauctions']);
        }, err => {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            const el = JSON.parse(err._body);
            console.log(el.error.message);
            this.alertService.error(el.error.message);
            this.loading = false;
        }
        );
    }
}
