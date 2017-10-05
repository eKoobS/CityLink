import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {userRegister} from "../../interfaces/user.interface";
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    // Declaracion de variables
    ShowVerifyPass: boolean = false;
    ShowPassRegister: boolean = false;
    showError: boolean = false;
    closeError: boolean = false;
    view: string = "login";
    showPassLogin: boolean = false;
    userRegister: userRegister[] = [];
    errorEmail: boolean = false;
    errorTerms: boolean = false;
    errorPhone: boolean = false;
    // radioTerms : boolean=false;

    // Observables Firebase
    user: Observable<firebase.User>;

    // Referencias al DOM
    @ViewChild('email') private emailRef: ElementRef;
    @ViewChild('phone') private phoneRef: ElementRef;
    @ViewChild('terms') private termsRef: ElementRef;
    @ViewChild('verifyPass') private verifyPassRef: ElementRef;
    @ViewChild('Pass') private passRef: ElementRef;

    constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
        console.log(this.user);

    }

    ngOnInit() {
    }


    // Metodos

    authFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    authGoogle() {

    }

    registerUser(user: userRegister) {

        if (!this.verifyRegisterFields(user)) {

        }

    }

    verifyRegisterFields(user: userRegister) {
        // expresiones regulares
        let patron = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        let patronEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        let errors: boolean = false;

        if (user.terms == false || user.terms == null) {
            this.sendError();
            this.errorTerms = true;
            errors = true;
            this.termsRef.nativeElement.focus();
        }

        if (!patron.test(user.phone) || user.phone == " " || user.phone == null) {
            this.sendError();
            this.phoneRef.nativeElement.focus();
            errors = true;
        }
        if (user.pass != user.passVerify) {
            this.verifyPassRef.nativeElement.focus();
            this.sendError();
            errors = true;
        }
        if(user.passVerify == "" || user.passVerify == null ){
            this.verifyPassRef.nativeElement.focus();
            this.sendError();
            errors = true;
        }
        
        if (user.email == "" || user.email == null || !patronEmail.test(user.email)) {
            this.errorEmail = true;
            this.emailRef.nativeElement.focus();
            errors = true;
            this.sendError();
        } else {
            this.errorEmail = false;
        }

        return errors;
    }

    sendError() {
        this.showError = true;
        this.closeError = false;
        setTimeout(() => {
            this.closeError = true;
            setTimeout(() => {
                this.showError = false;
            }, 1000);
        }, 2000);
    }

}
