import {AlertService} from '../services/alert.service';
import {CompanyService} from '../services/company.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-registercompany',
    templateUrl: './registercompany.component.html',
    styleUrls: ['./registercompany.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RegistercompanyComponent implements OnInit {

    mask: any[] = ['+', /\d{1,3}/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    model: any = {};
    loading = false;
    constructor(private router: Router,
        private companyService: CompanyService,
        private alertService: AlertService) { }

    ngOnInit() {
    }

    register() {
        this.loading = true;
        this.companyService.signUpCompany(this.model)
            .subscribe(
            data => {
                this.companyService.emailSignUp(this.model.email, this.model.password).then((user) => {

                    user.sendEmailVerification().then(function() {
                        // Email sent.
                        //  this.alertService.success('Login exitoso. Se ha enviado un correo de confirmación.');
                        // this.loading = false;
                        // this.router.navigate(['/home/loginstudent/']);
                    }).catch(function(error) {
                        console.log(error);

                    });
                    this.alertService.success('Registro exitoso. Se ha enviado un correo de confirmación.');
                    this.loading = false;
                }, err => {
                    this.alertService.error(err);
                    this.loading = false;
                }
                );
            }, err => {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                const el = JSON.parse(err._body);
                console.log(el.error.message);
                this.alertService.error(el.error.message);
            });
    }

}
