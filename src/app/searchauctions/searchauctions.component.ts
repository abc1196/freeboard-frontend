import {Auctions} from '../models/auctions';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FilterPipePipe} from '../pipes/filter-pipe.pipe';

@Component({
  selector: 'app-searchauctions',
  templateUrl: './searchauctions.component.html',
  styleUrls: ['./searchauctions.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchauctionsComponent implements OnInit {
  queryString = '';
  auctions: Auctions[] = [];
  prices = [{name: 'Todos los precios'}, {name: 'Hasta $100.000'}, {name: '$100.000 a $500.000'}, {name: 'Más de $500.00'}];

  constructor(private studentService: StudentService) {

  }

  ngOnInit() {
    this.getAllAuctions();

  }

  getAllAuctions() {
    this.studentService.getAllAuctions().subscribe(data => {this.auctions = data.items;});
  }

}
