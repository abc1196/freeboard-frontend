import {Offers} from '../models/offers';
import {Students} from '../models/students';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class StudentService {

  companyEndpoint = 'https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/companies/v1/';
  studentEndpoint = 'https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/students/v1/';

  constructor(private http: Http) {
  }


  signUpStudent(students: Students) {
    return this.http.post(this.studentEndpoint + 'signup/student', students).map((response: Response) => response.json());
  }

  getStudentProfile() {
    return this.http.get(this.studentEndpoint + 'getStudentByEmail?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  updateStudent(students: Students) {
    return this.http.put(this.studentEndpoint + 'update/student?jwt=' + this.getjwt(), students).map((response: Response) => response.json());
  }

  getAuctions() {
    return this.http.get(this.studentEndpoint + 'auctions?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  getOffers() {
    return this.http.get(this.studentEndpoint + 'offers?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  getAllAuctions() {
    return this.http.get(this.studentEndpoint + 'auctions?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  getAuctionId(idoffers: string) {
    return this.http.get(this.studentEndpoint + 'offers/auction/' + idoffers + '?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  deleteOffer(idoffers: string, idauctions: string) {
    return this.http.delete(this.studentEndpoint + 'offers/' + idoffers + '?jwt=' + this.getjwt() + '&idAuction=' + idauctions).map((response: Response) => response.json());
  }

  getOffer(idoffers: string) {
    return this.http.get(this.studentEndpoint + 'offers/' + idoffers + '?jwt=' + this.getjwt()).map((response: Response) => response.json());
  }

  updateOffer(offers: Offers) {
    return this.http.put(this.studentEndpoint + 'offers/', offers + '?jwt=' + this.getjwt()).map((response: Response) => response.json());
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
