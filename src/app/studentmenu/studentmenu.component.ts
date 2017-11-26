import {Students} from '../models/students';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-studentmenu',
  templateUrl: './studentmenu.component.html',
  styleUrls: ['./studentmenu.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StudentmenuComponent implements OnInit {
  students: Students;
  constructor(private studentservice: StudentService, private route: ActivatedRoute,
    private router: Router, ) {this.getStudent();}

  ngOnInit() {
  }
  getStudent() {
    this.studentservice.getStudentProfile().subscribe(data => {this.students = data;});
  }
}
