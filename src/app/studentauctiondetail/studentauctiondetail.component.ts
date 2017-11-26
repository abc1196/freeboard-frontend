import {Auctions} from '../models/auctions';
import { Companies } from '../models/companies';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-studentauctiondetail',
    templateUrl: './studentauctiondetail.component.html',
    styleUrls: ['./studentauctiondetail.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class StudentauctiondetailComponent implements OnInit {
    @Input() auction: Auctions;
    company: Companies;
    newoffer: number;
    loading = false;
    returnUrl: string;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private studentService: StudentService, private alertService: AlertService) {
        this.getAuction();
    }

    ngOnInit() {
    }

    addOffer() {
        this.loading = true;
        if (this.newoffer > 0 && this.newoffer <= this.auction.price) {
            this.studentService.addOffer(this.auction.idauctions, this.newoffer + '').subscribe(data => {
                this.loading = false;
                this.alertService.success('Oferta registrada', true);
            }, err => {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                const el = JSON.parse(err._body);
                console.log(el.error.message);
                this.loading = false;
                this.alertService.error(el.error.message);
            });
        } else {
            this.alertService.error('Ingrese oferta valida');
            this.loading = false;
        }
    }

    getAuction() {
        console.log(this.route.snapshot.paramMap.get('idauctions'));
        this.studentService.getAuctionById(this.route.snapshot.paramMap.get('idauctions')).subscribe(data => {
            this.auction = data;
            this.studentService.getCompanyByAuction(this.auction.idauctions).subscribe(c => {
                this.company = c;
            });
        });
    }

    validate(priceo: number, pricea: number) {
        if (priceo <= 0 || priceo > pricea) {
            return false;
        } else {
            return true;
        }
    }




}
