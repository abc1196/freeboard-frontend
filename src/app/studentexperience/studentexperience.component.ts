import {Students} from '../models/students';
import {AlertService} from '../services/alert.service';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-studentexperience',
  templateUrl: './studentexperience.component.html',
  styleUrls: ['./studentexperience.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StudentexperienceComponent implements OnInit {
  @Input() students: Students;
  loading = false;
  constructor(private studentservice: StudentService,
    private alertService: AlertService) {this.getStudent();}

  ngOnInit() {
  }

  getStudent() {
    this.studentservice.getStudentProfile().subscribe(data => {this.students = data;});
  }

  updateExperience() {
    this.loading = true;
    this.studentservice.updateStudent(this.students).subscribe(data => {
      this.alertService.success('Cambios Guardados');
      this.loading = false;
    }, err => {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(this.students);
      console.log(err);
      this.alertService.error(`Backend returned code ${err.status}, body was: ${err}`);
      this.loading = false;
    });

  }

}
