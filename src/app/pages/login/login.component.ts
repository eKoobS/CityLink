import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {userRegister} from "../../interfaces/user.interface";
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {alertService} from '../../services/alert.service'


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

    errorPass:boolean =false;
    errorVerifyPass:boolean =false;
    errorEmail: boolean = false;
    errorTerms: boolean = false;
    errorPhone: boolean = false;
    // radioTerms : boolean=false;

    // Observables Firebase
    user: Observable<firebase.User>;

    // Referencias al DOM
    @ViewChild('email') private emailRef: ElementRef;
    @ViewChild('pass') private passRef: ElementRef;
    @ViewChild('phone') private phoneRef: ElementRef;
    @ViewChild('verifyPass') private verifyPassRef: ElementRef;


    constructor(db: AngularFireDatabase,
                private afAuth: AngularFireAuth,
                private alertService: alertService) {

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

        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    authTwitter() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());

    }

    registerUser(user: userRegister) {

        if (!this.verifyRegisterFields(user)) {
            this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.pass);
        }
    }

    verifyRegisterFields(user: userRegister) {
        // expresiones regulares
        let patronPhone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        let patronEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        let errors: boolean = false;

        if (user.email == "" || user.email == null || !patronEmail.test(user.email)) {
            this.errorEmail = true;
            this.emailRef.nativeElement.focus();
            errors = true;
            this.sendError();
        }
        if (!patronPhone.test(user.phone) || user.phone == " " || user.phone == null) {
            this.sendError();
            this.phoneRef.nativeElement.focus();
            errors = true;
            this.errorPhone=true;
        }
        if(user.pass =="" || user.pass == null){
            this.passRef.nativeElement.focus();

            this.errorPass=true;
            this.sendError();
            errors=true;
        }
        if(user.passVerify == "" || user.passVerify == null ){
            this.verifyPassRef.nativeElement.focus();
            this.errorVerifyPass=true;
            this.sendError();
            errors = true;
        }
        if (user.pass != user.passVerify) {
            this.verifyPassRef.nativeElement.focus();
            this.sendError();
            this.errorVerifyPass=true;
            errors = true;
        }
        if (user.terms == false || user.terms == null) {
            errors = true;
            this.sendError();
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

    loginUser(user: userRegister) {

        if (!this.verifyLoginFields(user)) {

        }
    }

    verifyLoginFields(user: userRegister){
        let regularExpressionEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        let errors: boolean = false;

        if(!regularExpressionEmail.test(user.email) || user.email == "" || user.email == null){
            this.errorEmail = true;
            this.emailRef.nativeElement.focus();
            errors=true;
            this.sendError();

        }

        if( user.pass=="" || user.pass == null) {
            this.errorPass = true;
            this.passRef.nativeElement.focus();
            errors = true;
            this.sendError();
        }
        // } else {
        //     this.errorPass=false;
        // }
        return errors;
    }



}
