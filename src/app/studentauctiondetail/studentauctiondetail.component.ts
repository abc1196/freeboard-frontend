import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-studentauctiondetail',
  templateUrl: './studentauctiondetail.component.html',
  styleUrls: ['./studentauctiondetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentauctiondetailComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  constructor() {}

  ngOnInit() {
  }

  addOffer() {

  }

}