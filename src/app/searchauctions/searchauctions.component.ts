import {Auctions} from '../models/auctions';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-searchauctions',
  templateUrl: './searchauctions.component.html',
  styleUrls: ['./searchauctions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchauctionsComponent implements OnInit {
  auctions: Auctions[] = [];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getAllAuctions();
  }

  getAllAuctions() {
    this.studentService.getAllAuctions().subscribe(data => {this.auctions = data.items;});
  }

}
