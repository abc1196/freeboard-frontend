import {Injectable} from '@angular/core';
import {Transactions} from '../models/transactions';
import {Http, Response} from '@angular/http';

@Injectable()
export class TransactionsService {

  constructor(private http: Http) {
  }

  createTransaction(transactions: Transactions) {
    return this.http.post('http://localhost:8080/_ah/api/transactions/v1/create/transactions',
      transactions).map((response: Response) => response.json());
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
