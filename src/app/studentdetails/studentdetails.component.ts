import {Students} from '../models/students';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StudentdetailsComponent implements OnInit {
  students: Students;
  loading = false;
  constructor(private studentservice: StudentService,
    private alertService: AlertService) {
    this.getStudent();
  }

  ngOnInit() {
  }

  getStudent() {
    this.studentservice.getStudentProfile().subscribe(data => {this.students = data;});
  }

  save() {
    this.loading = true;
    this.studentservice.updateStudent(this.students).subscribe(data => {
      this.alertService.success('Cambios Guardados');
      this.loading = false;
    },
      (err: HttpErrorResponse) => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(this.students);
        console.log(err);
        this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
        this.loading = false;
      });
  }

}
