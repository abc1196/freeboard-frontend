import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-forgotpassword',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ForgotpasswordComponent implements OnInit {
    model: any = {};
    loading = false;
    constructor(private authenticationService: AuthenticationService, private alertService: AlertService) { }

    ngOnInit() {
    }

    sendPasswordEmail() {
        this.loading = true;
        let email = false;
        this.authenticationService.sendPasswordEmail(this.model.email).then((message) => {

            this.alertService.success(message);
        }).catch(err => {
            email = true;
            console.log(email);
            this.alertService.error('No se pudo enviar correo. Intenta de nuevo.');
        });
        this.loading = false;

    }


}
