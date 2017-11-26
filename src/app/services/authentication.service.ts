import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService {
    companyEndpoint = 'https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/companies/v1/';
    studentEndpoint = 'https://cloudsql-dot-cloud-computing-freeboard.appspot.com/_ah/api/students/v1/';
    authState: any = null;
    constructor(private afAuth: AngularFireAuth, private http: Http) {
        this.afAuth.authState.subscribe((auth) => {
            this.authState = auth;
        });
    }

    sendPasswordEmail(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email).then(function() {
            return 'Email enviado';
        });
    }

    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                return user;
            })
    }

    loginCompany(email: string, password: string) {
        return this.http.post(this.companyEndpoint + 'login/company', JSON.stringify({ email: email, password: password }))
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
        return this.http.post(this.studentEndpoint + 'login/student', JSON.stringify({ email: email, password: password }))
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


    //// Sign Out ////
    signOut(): void {
        this.afAuth.auth.signOut();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
