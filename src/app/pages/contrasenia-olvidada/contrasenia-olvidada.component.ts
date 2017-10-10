import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-contrasenia-olvidada',
    templateUrl: './contrasenia-olvidada.component.html',
    styleUrls: ['./contrasenia-olvidada.component.scss']
})
export class ContraseniaOlvidadaComponent implements OnInit {

    userEmail: string = "";
    errorEmail: boolean = false;
    error:boolean = false;
    closeError: boolean = false;

    @ViewChild('email') private emailRef: ElementRef;

    constructor(private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    sendEmailVerification(email: string) {
        if(!this.errorInEmailField(email)) {
            this.afAuth.auth.sendPasswordResetEmail(email, null);
        }
    }

    errorInEmailField(email: string) {

        let error: boolean = false;

        let patronEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        if (email == "" || email == null || !patronEmail.test(email)) {
            this.errorEmail = true;
            this.emailRef.nativeElement.focus();
            error = true;
            this.showError();
        }

        return error;
    }

    showError() {
        this.error = true;
        this.closeError = false;
        setTimeout(() => {
            this.closeError = true;
            setTimeout(() => {
                this.error = false;
            }, 1000);
        }, 2000);
    }

}
