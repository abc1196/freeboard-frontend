import {Auctions} from '../models/auctions';
import { Companies } from '../models/companies';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

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
    private studentService: StudentService) {
    this.getAuction();
  }

  ngOnInit() {
  }

  addOffer() {
    this.loading = true;
    console.log(this.auction.idauctions);
    this.studentService.addOffer(this.auction.idauctions, this.newoffer + '').subscribe(data => {
      this.loading = false;
    },
      (err: HttpErrorResponse) => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        //  this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
        console.log(err);
        this.loading = false;
      });
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

}
