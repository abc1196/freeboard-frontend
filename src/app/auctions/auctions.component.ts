import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Companies} from '../models/companies';
import {Auctions} from '../models/auctions';
@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionsComponent implements OnInit {
  auction: Auctions;
  constructor() { }

  ngOnInit() {
  }

}
