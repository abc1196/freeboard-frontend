import { Students } from '../models/students';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }


  signUpStudent(students: Students) {
        return this.http.post('http://localhost:8080/_ah/api/students/v1/signup/student', students).map((response: Response) => response.json());
    }

    // private helper methods
   private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            return currentUser.token;
        }
    }

}
