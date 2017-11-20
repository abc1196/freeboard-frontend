import {Students} from '../models/students';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class StudentService {


  constructor(private http: Http) {
  }


  signUpStudent(students: Students) {
    return this.http.post('http://localhost:8080/_ah/api/students/v1/signup/student', students).map((response: Response) => response.json());
  }

  getStudentProfile() {
    return this.http.get('http://localhost:8080/_ah/api/students/v1/getStudentByEmail?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  updateStudent(students: Students) {
    return this.http.put('http://localhost:8080/_ah/api/students/v1/update/student?jwt=' + this.getjwt(), students).map((response: Response) => response.json());
  }

  getAuctions() {
    return this.http.get('http://localhost:8080/_ah/api/students/v1/auctions?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  getOffers() {
    return this.http.get('http://localhost:8080/_ah/api/students/v1/offers?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  // private helper methods
  private getjwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.value;
    }
  }

}
