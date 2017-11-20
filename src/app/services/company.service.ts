import {Injectable} from '@angular/core';

import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Companies} from '../models/companies';

@Injectable()
export class CompanyService {

  constructor(private http: Http) {}

  signUpCompany(companies: Companies) {
    return this.http.post('http://localhost:8080/_ah/api/companies/v1/signup/company', companies).map((response: Response) => response.json());
  }
  getCompanyProfile() {
    return this.http.get('http://localhost:8080/_ah/api/companies/v1/getCompanyByEmail?jwt=' + this.getjwt()).map((response: Response) => response.json());
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
