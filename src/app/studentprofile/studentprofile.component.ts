import {AuthenticationService} from '../services/authentication.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StudentprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }

  logout() {
      this.authenticationService.signOut();
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

}
