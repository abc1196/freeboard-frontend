import {Auctions} from '../models/auctions';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FilterPipePipe} from '../pipes/filter-pipe.pipe';

@Component({
  selector: 'app-searchauctions',
  templateUrl: './searchauctions.component.html',
  styleUrls: ['./searchauctions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchauctionsComponent implements OnInit {
  queryString: string;
  auctions: Auctions[] = [];
  filteredItems: Auctions[];
  pages = 4;
  pageSize = 5;
  pageNumber = 0;
  currentIndex = 1;
  items: Auctions[];
  pagesIndex: Array<number>;
  pageStart = 1;
  inputName = '';

  constructor(private studentService: StudentService) {
    this.getAllAuctions();
    this.filteredItems = this.auctions;
    this.init();
  }

  ngOnInit() {
  }

  getAllAuctions() {
    this.studentService.getAllAuctions().subscribe(data => {this.auctions = data.items;});
  }

  init() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;

    this.pageNumber = parseInt('' + (this.filteredItems.length / this.pageSize), 1);
    if (this.filteredItems.length % this.pageSize !== 0) {
      this.pageNumber++;
    }

    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.refreshItems();
    console.log('this.pageNumber :  ' + this.pageNumber);
  }

  FilterByName() {
    this.filteredItems = [];
    if (this.inputName !== '') {
      this.auctions.forEach(element => {
        if (element.name.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
        }
      });
    } else {
      this.filteredItems = this.auctions;
    }
    console.log(this.filteredItems);
    this.init();
  }
  fillArray(): any {
    const obj = new Array();
    for (let index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }
  refreshItems() {
    this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex = this.fillArray();
  }
  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }
  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }


}
