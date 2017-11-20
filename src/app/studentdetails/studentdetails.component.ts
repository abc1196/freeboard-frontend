import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentdetailsComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor() {}

  ngOnInit() {
  }

  save() {
  }

}
