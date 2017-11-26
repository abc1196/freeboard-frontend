import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-landingcompany',
  templateUrl: './landingcompany.component.html',
  styleUrls: ['./landingcompany.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingcompanyComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
  }

  creatAuction() {
    this.router.navigate(['/company/companydetails/addauction']);

  }
}
