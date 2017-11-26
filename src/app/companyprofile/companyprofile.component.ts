import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CompanyprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
