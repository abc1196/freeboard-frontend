import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {}

  loginCompany(email: string, password: string) {
    return this.http.post('https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/companies/v1/login/company', JSON.stringify({email: email, password: password}))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const jwt = response.json();
        if (jwt) {
          // store jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(jwt));
        }

        return jwt;
      });
  }

  loginStudent(email: string, password: string) {
    return this.http.post('https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/students/v1/login/student', JSON.stringify({email: email, password: password}))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const jwt = response.json();
        if (jwt) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(jwt));
        }

        return jwt;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
