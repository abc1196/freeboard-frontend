import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-payresponsepage',
  templateUrl: './payresponsepage.component.html',
  styleUrls: ['./payresponsepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PayresponsepageComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
<<<<<<< HEAD
=======
    // private route: ActivatedRoute,
    // private router: Router,
    // private authenticationService: AuthenticationService,
>>>>>>> branch 'master' of https://github.com/abc1196/freeboard-frontend.git
    private alertService: AlertService) {}

  ngOnInit() {

  }

<<<<<<< HEAD
=======


>>>>>>> branch 'master' of https://github.com/abc1196/freeboard-frontend.git
}
