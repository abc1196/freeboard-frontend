import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Companies} from '../models/companies';
import {Auctions} from '../models/auctions';
@Injectable()
export class CompanyService {

  companyEndpoint = 'https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/companies/v1/';
  studentEndpoint = 'https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/students/v1/';

  constructor(private http: Http) {}

  signUpCompany(companies: Companies) {
    return this.http.post(this.companyEndpoint + 'signup/companies', companies).map((response: Response) => response.json());
  }
  getCompanyProfile() {
    return this.http.get(this.companyEndpoint + 'getCompanyProfile?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }
  updateCompany(companies: Companies) {
    return this.http.put(this.companyEndpoint + 'update/company?jwt=' + this.getjwt(), companies).map((response: Response) => response.json());
  }

  deleteAuction(idauctions: string) {
    return this.http.delete(this.companyEndpoint + 'removeAuction/' + idauctions + '?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }
  showOffers(idauctions: string) {
    return this.http.delete(this.companyEndpoint + 'auctionsShowOffers/' + idauctions + '?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }
  getAllAuctions() {
    return this.http.get(this.companyEndpoint + 'auctions').map((response: Response) => response.json());
  }
  getAuctionById(idauctions: string) {

    return this.http.get(this.companyEndpoint + 'auctionsById/'+ idauctions + '?jwt=' +this.getjwt() ).map((response: Response) => response.json());
  }

  getOffers(auctions: Auctions) {
    return this.http.get(this.companyEndpoint + 'offers?jwt=' + this.getjwt()).map((response: Response) => response.json());
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
