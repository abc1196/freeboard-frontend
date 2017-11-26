import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-landingstudent',
  templateUrl: './landingstudent.component.html',
  styleUrls: ['./landingstudent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingstudentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
  }


  seeAuctions() {
    this.router.navigate(['/student/searchauctions']);

  }

}
