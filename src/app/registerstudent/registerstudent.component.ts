import {AlertService} from '../services/alert.service';
import {StudentService} from '../services/student.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-registerstudent',
    templateUrl: './registerstudent.component.html',
    styleUrls: ['./registerstudent.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterstudentComponent implements OnInit {

    model: any = {};
    loading = false;
    constructor(private router: Router,
        private studentService: StudentService,
        private alertService: AlertService) { }

    ngOnInit() {
    }

    register() {
        this.loading = true;
        this.studentService.signUpStudent(this.model)
            .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.studentService.emailSignUp(this.model.email, this.model.password).then((user) => {

                    user.sendEmailVerification().then(function() {
                        // Email sent.
                        console.log('correo enviado a ' + user);
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
                this.loading = false;
            });
    }

}
