import {Auctions} from '../models/auctions';
import {Offers} from '../models/offers';
import {AlertService} from '../services/alert.service';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class OffersComponent implements OnInit {
    offers: Offers[] = [];
    auction: Auctions;
    constructor(private studentservice: StudentService, private alertService: AlertService, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.getOffers();
    }

    getOffers() {
        this.studentservice.getOffers().subscribe(data => { this.offers = data.items; }, err => {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            const el = JSON.parse(err._body);
            console.log(el.error.message);
            this.alertService.error(el.error.message);
        });
    }
    getAuction(idoffers: string) {
        this.studentservice.getAuctionId(idoffers).subscribe(auction => {
            this.auction = auction;
            this.router.navigate(['./student/searchauctions/' + this.auction.idauctions]);
        }, err => {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            const el = JSON.parse(err._body);
            console.log(el.error.message);
            this.alertService.error(el.error.message);
        });
    }


    deleteOffer(idoffers: string) {
        this.studentservice.getAuctionId(idoffers).subscribe(data => {
            this.auction = data;
            this.studentservice.deleteOffer(idoffers, this.auction.idauctions).subscribe(response => {
                this.alertService.success('Oferta eliminada', true);
                this.getOffers();
            });
        }, err => {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            const el = JSON.parse(err._body);
            console.log(el.error.message);
            this.alertService.error(el.error.message);
        }

        );

    }
    refresh(): void {
        window.location.reload();
    }
}
