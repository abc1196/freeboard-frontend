import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-studentofferdetail',
  templateUrl: './studentofferdetail.component.html',
  styleUrls: ['./studentofferdetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentofferdetailComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  constructor() {}

  ngOnInit() {
  }

  updateOffer() {

  }

}
