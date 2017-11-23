import {AlertService} from '../services/alert.service';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterstudentComponent implements OnInit {

  model: any = {};
  loading = false;
  constructor(private router: Router,
    private studentService: StudentService,
    private alertService: AlertService) {}

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.studentService.signUpStudent(this.model)
      .subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/loginstudent']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
