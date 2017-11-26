import {Offers} from '../models/offers';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {AuthenticationService} from '../services/authentication.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CompanyService} from '../services/company.service';
import {TransactionsService} from '../services/transaction.service';
import {Transactions} from '../models/transactions';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ObservableInput} from 'rxjs/Observable';
import {Form} from '@angular/forms';
import {RequestArgs} from '@angular/http/src/interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-payform',
  templateUrl: './payform.component.html',
  styleUrls: ['./payform.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PayformComponent implements OnInit {

  offer: Offers;
  loading = false;
  returnUrl: 'https://sandbox.gateway.payulatam.com/ppp-web-gateway/';
  transaction: Transactions;

  constructor(private router: Router, private alertService: AlertService,
    private companyService: CompanyService, private transactionService: TransactionsService,
    private http: Http) {
  }

  ngOnInit() {
  }


}
