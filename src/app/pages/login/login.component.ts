import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {userRegister} from "../../interfaces/user.interface";
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {alertService} from '../../services/alert.service'
import {error} from "util";


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

    errorPass: boolean = false;
    errorVerifyPass: boolean = false;
    errorEmail: boolean = false;
    errorTerms: boolean = false;
    errorPhone: boolean = false;
    isLoading: boolean = false;

    userInfo: FirebaseListObservable<any>;

    // response: any;
    // radioTerms : boolean=false;

    // Observables Firebase
    userInfoBasic:any;
    user: Observable<firebase.User>;

    // Referencias al DOM
    @ViewChild('email') private emailRef: ElementRef;
    @ViewChild('pass') private passRef: ElementRef;
    @ViewChild('phone') private phoneRef: ElementRef;
    @ViewChild('verifyPass') private verifyPassRef: ElementRef;


    constructor(db: AngularFireDatabase,
                private afAuth: AngularFireAuth,
                private alertService: alertService) {

        afAuth.auth.onAuthStateChanged((user)=> {
            console.log(user)
            this.userInfoBasic=user;
        });

        this.userInfo = db.list('/usuarios');
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
            this.isLoading=true;
            this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pass).then((response: any) => {
                this.afAuth.auth.currentUser.sendEmailVerification().then(response=>{
                    console.log("Resuelto "+response)
                    // response.emailVerified=true;
                }).catch(error=>{
                    console.log(error)
                })
                this.isLoading=false;
                this.alertService.success("Usuario Registrado Correctamente","Te hemos enviado un link a tu correo" +
                    " da click en el para entrar a la app");
                this.userInfo.set(response.uid, {
                    'email': user.email,
                    'telefono': user.phone
                });

            }).catch((error: any) => {
                this.isLoading=false;
                this.getErrorAuth(error.code);
            })

        }
    }

    verifyRegisterFields(user: userRegister) {
        // expresiones regulares
        let patronPhone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        let patronEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        let errors: boolean = false;

        // verificacion de email
        if (user.email == "" || user.email == null || !patronEmail.test(user.email)) {
            this.errorEmail = true;
            this.emailRef.nativeElement.focus();
            errors = true;
            this.sendError();
        }

        // verificacion de telefono
        if (!patronPhone.test(user.phone) || user.phone == " " || user.phone == null) {
            this.sendError();
            this.phoneRef.nativeElement.focus();
            errors = true;
            this.errorPhone = true;
        }

        // verificacion de contraseñas iguales
        if (user.pass != user.passVerify) {
            this.verifyPassRef.nativeElement.focus();
            this.sendError();
            this.errorVerifyPass = true;
            errors = true;
        }

        // verificacion de contraseña vacia
        if (user.pass == "" || user.pass == null) {
            this.passRef.nativeElement.focus();

            this.errorPass = true;
            this.sendError();
            errors = true;
        }

        // verificacion de repetir contraseña vacia
        if (user.passVerify == "" || user.passVerify == null) {
            this.verifyPassRef.nativeElement.focus();
            this.errorVerifyPass = true;
            this.sendError();
            errors = true;
        }

        // verificacion de terminos y condiciones vacio
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

            this.isLoading = true;

            this.afAuth.auth.signInWithEmailAndPassword(user.email, user.pass)
                .then((response: any) => {
                    console.log(response);
                    // Redigir a otra vista de principal
                    this.isLoading = false;
                })
                .catch((error: any) => {
                    this.getErrorAuth(error.code);
                    this.isLoading = false;
                })
        }
    }

    verifyLoginFields(user: userRegister) {
        let regularExpressionEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        let errors: boolean = false;

        if (!regularExpressionEmail.test(user.email) || user.email == "" || user.email == null) {
            this.errorEmail = true;

            this.emailRef.nativeElement.focus();
            errors = true;
            this.sendError();

        }

        if (user.pass == "" || user.pass == null) {
            this.errorPass = true;
            this.passRef.nativeElement.focus();
            errors = true;
            this.sendError();
        }
        return errors;
    }

    showInfoTerms(user: userRegister) {
        this.alertService.infoTerms('Terminos y Condiciones').then(response => {
            user.terms = true;
        })
    }

    getErrorAuth(codeError: string) {

        switch (codeError) {
            case 'auth/user-not-found':
                this.alertService.confirm("Usuario no encontrado!", "Escriba un usuario valido")
                    .then((response) => {
                        this.emailRef.nativeElement.focus();
                        this.errorEmail = true;
                        // console.log(response);
                    });

                break;

            case 'auth/user-disabled':
                this.alertService.confirm("Email deshabilitado!", "Escriba un email valido")
                    .then((response) => {
                        this.emailRef.nativeElement.focus();
                        this.errorEmail = true;
                        console.log(response);
                    });

                break;

            case 'auth/wrong-password':
                this.alertService.confirm("Contraseña incorrecta!", "Escriba una contraseña correcta")
                    .then((response) => {
                        this.passRef.nativeElement.focus();
                        this.errorPass = true;
                        console.log(response);
                    });

                break;

            case 'auth/email-already-in-use':
                this.alertService.confirm("Email en uso", "Ingrese un nuevo correo")
                    .then((response) => {
                        this.emailRef.nativeElement.focus();
                        this.errorEmail = true;
                    });
                break;

            case 'auth/weak-password':
                this.alertService.confirm("Contraseña débil", "La contraseña debe contener al menos 6 digitos")
                    .then((response) => {
                        this.passRef.nativeElement.focus();
                        this.errorPass = true;
                        this.errorVerifyPass = true;
                    });
                break;

        }
    }
}
