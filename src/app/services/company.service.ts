import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Companies} from '../models/companies';
import {Auctions} from '../models/auctions';
@Injectable()
export class CompanyService {

  constructor(private http: Http) {}

  signUpCompany(companies: Companies) {
    return this.http.post('http://localhost:8080/_ah/api/companies/v1/signup/company', companies).map((response: Response) => response.json());
  }
  getCompanyProfile() {
    return this.http.get('http://localhost:8080/_ah/api/companies/v1/getCompanyByEmail?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }
  updateCompany(companies: Companies) {
    return this.http.put('http://localhost:8080/_ah/api/companies/v1/update/student?jwt=' + this.getjwt(), companies).map((response: Response) => response.json());
  }

  deleteAuction(idauctions: string) {
    return this.http.delete('http://localhost:8080/_ah/api/companies/v1/auctions/' + idauctions + '?jwt=' + this.getjwt() + '&idAuction=' + idauctions).map((response: Response) => response.json());
  }
  getAuctions() {
    return this.http.get('http://localhost:8080/_ah/api/companies/v1/auctions?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }
  getAuctionById(idauctions: string) {

    return this.http.get('https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/companies/v1/auctionsById/?jwt=' + this.getjwt() + '&idAuction=' + idauctions).map((response: Response) => response.json());
  }


  getOffers(auctions: Auctions) {
    return this.http.get('http://localhost:8080/_ah/api/companies/v1/offers?jwt=' + this.getjwt()).map((response: Response) => response.json());
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
