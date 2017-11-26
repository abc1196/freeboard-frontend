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
  typeFilter = 'Todos los precios';
  priceFilter = 0;
  auctions: Auctions[] = [];
  selectedPrice = 0;
  prices = [
    {num: 0, name: 'Todos los precios'},
    {num: 1, name: 'Hasta $100.000'},
    {num: 2, name: '$100.000 a $500.000'},
    {num: 3, name: 'Más de $500.000'}
  ];
  selectedType = 0;
  types = [
    {num: 0, name: 'Todos los tipos'},
    {num: 1, name: 'Cartel Publicitario'},
    {num: 2, name: 'Video Publicitario'},
    {num: 3, name: 'Logo'},
    {num: 4, name: 'Landing Page'},
    {num: 5, name: 'Aplicación Móvil'}
  ];

  constructor(private studentService: StudentService) {

  }

  ngOnInit() {
    this.getAllAuctions();
  }

  filterPrice(auction: Auctions) {
    if (this.priceFilter === 0) {
      return true;
    } else if (this.priceFilter === 1) {
      return !(auction.price <= 100000);
    }
  }


  advancedSearch() {
    this.typeFilter= this.types[this.selectedType].name;
   // this.priceFilter = this.selectedPrice;
    // console.log('TYPESCRIPT: ' + this.priceFilter);
  }

  getAllAuctions() {
    this.studentService.getAllAuctions().subscribe(data => {this.auctions = data.items;});
  }

}
