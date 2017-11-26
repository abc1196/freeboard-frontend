import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {AuthenticationService} from '../services/authentication.service';
import {StudentService} from '../services/student.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    moduleId: module.id,
    selector: 'app-loginstudent',
    templateUrl: './loginstudent.component.html',
    styleUrls: ['./loginstudent.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginstudentComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private studentservice: StudentService) { }

    ngOnInit() {
        this.authenticationService.signOut();
        this.authenticationService.logout();
    }

    loginStudent() {
        this.loading = true;
        this.authenticationService.loginStudent(this.model.email, this.model.password)
            .subscribe(
            data => {
                this.authenticationService.emailLogin(this.model.email, this.model.password).then((user) => {
                    console.log(user);
                    console.log(user.emailVerified);
                    if (user.emailVerified) {
                        this.alertService.success('Login Succesful');
                        this.loading = false;
                        this.router.navigate(['/student/searchauctions'])
                    } else {
                        this.alertService.error('No has verificado tu cuenta. Revisa tu correo.');
                        this.loading = false;
                    }
                })
                    .catch(error => {
                        this.alertService.error('No se pudo iniciar sesión. Intenta de nuevo.');
                        this.loading = false;
                    });
            }, err => {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                const el = JSON.parse(err._body);
                const pass = el.error.message;
                if (pass === 'Password Incorrect.') {

                    this.authenticationService.emailLogin(this.model.email, this.model.password).then((user) => {
                        console.log(user);
                        console.log(user.emailVerified);
                        this.studentservice.setPassword(this.model.password, this.model.email).subscribe(data => {

                            this.alertService.success('Login Successful');
                            this.loading = false;
                            this.redirect();
                        }, err => {
                            const el = JSON.parse(err._body);
                            this.alertService.error(el.error.message);
                            this.loading = false;
                        });

                    }, err => {
                        const el = JSON.parse(err._body);
                        this.alertService.error(el.error.message);
                        this.loading = false;
                    })
                        .catch(error => {
                            this.alertService.error('No se pudo iniciar sesión. Intenta de nuevo.');
                            this.loading = false;
                        });
                } else {
                    console.log(el.error.message);
                    this.alertService.error(el.error.message);
                    this.loading = false;
                }
            }
            );
    }
    redirect() {

        this.router.navigate(['/student/searchauctions']);

    }
}
