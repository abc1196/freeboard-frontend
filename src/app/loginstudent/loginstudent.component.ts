import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {AuthenticationService} from '../services/authentication.service';
import {StudentService} from '../services/student.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  moduleId: module.id,
  selector: 'app-loginstudent',
  templateUrl: './loginstudent.component.html',
  styleUrls: ['./loginstudent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginstudentComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private studentservice: StudentService) {}

  ngOnInit() {
    this.authenticationService.logout();
  }

  loginStudent() {
    this.loading = true;
    this.authenticationService.loginStudent(this.model.email, this.model.password)
      .subscribe(
      data => {
        this.alertService.success('Login Succesfull');
        this.loading = false;
        this.router.navigate(['/student/searchauctions']);
      },
      (err: HttpErrorResponse) => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
        this.loading = false;
      }
      );
  }

}
