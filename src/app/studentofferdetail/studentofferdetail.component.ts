import {Auctions} from '../models/auctions';
import {Offers} from '../models/offers';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-studentofferdetail',
    templateUrl: './studentofferdetail.component.html',
    styleUrls: ['./studentofferdetail.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class StudentofferdetailComponent implements OnInit {

    @Input() offer: Offers;
    @Input() auction: Auctions;
    loading = false;
    returnUrl: string;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private studentService: StudentService, private alertService: AlertService) {
        this.getOffer();
    }

    ngOnInit() {

    }

    getOffer() {
        this.studentService.getOffer(this.route.snapshot.paramMap.get('idoffers'))
            .subscribe(data => {
                this.offer = data;
                this.studentService.getAuctionId(this.offer.idoffers).subscribe(auction => {
                    this.auction = auction;
                });
            });
    }

    getAuction() {
        this.router.navigate(['./student/searchauctions/' + this.auction.idauctions]);
    }

    updateOffer() {
        this.loading = true;
        if (this.offer.price > 0 && this.offer.price <= this.auction.price) {
            this.studentService.updateOffer(this.offer.idoffers, this.offer.price + '').subscribe(
                data => {
                    console.log(data);
                    this.loading = false;
                    this.router.navigate(['/student/studentdetails/']);
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

    validate(priceo: number, pricea: number) {
        if (priceo <= 0 || priceo > pricea) {
            return false;
        } else {
            return true;
        }
    }

}
