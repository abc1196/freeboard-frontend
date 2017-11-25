import {Auctions} from '../models/auctions';
import {Offers} from '../models/offers';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-studentofferdetail',
  templateUrl: './studentofferdetail.component.html',
  styleUrls: ['./studentofferdetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentofferdetailComponent implements OnInit {

  @Input() offer: Offers;
  auction: Auctions[];
  loading = false;
  returnUrl: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) {
    this.getOffer();
  }

  ngOnInit() {

  }

  getOffer() {
    this.studentService.getOffer(this.route.snapshot.paramMap.get('idoffers'))
      .subscribe(data => {
        this.offer = data;
      });
  }

  updateOffer() {
    this.loading = true;
    console.log(this.offer);
    this.studentService.updateOffer(this.offer.idoffers, this.offer.price+'').subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.router.navigate(['/student/myoffers']);
      }, error => {
        console.log(error);
        this.loading = false;
      });
  }

}
