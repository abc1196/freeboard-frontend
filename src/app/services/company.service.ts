import {Injectable} from '@angular/core';

import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Companies} from '../models/companies';

@Injectable()
export class CompanyService {

  constructor(private http: Http) {}

  signUpCompany(companies: Companies) {
    return this.http.post('http://localhost:8080/_ah/api/companies/v1/signup/company', companies).map((response: Response) => response.json());
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
