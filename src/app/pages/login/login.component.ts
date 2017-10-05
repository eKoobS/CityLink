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
    errorEmail: boolean = false;
    // radioTerms : boolean=false;

    // Observables Firebase
    user: Observable<firebase.User>;

    // Referencias al DOM
    @ViewChild('email') private elementRef: ElementRef;

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
        if (user.terms == false || user.terms == null) {
            console.log("Acepte los terminos y condiciones para proceder");
        }

        if (user.email == "" || user.email == null) {
            this.errorEmail = true;
            this.elementRef.nativeElement.focus();
            this.showError = true;
            this.closeError = false;
            setTimeout(() => {
                this.closeError = true;
                setTimeout(() => {
                    this.showError = false;
                }, 1000);
            }, 2000);


        } else {
            this.errorEmail = false;
        }

        this.alertService.error('Titulo del error', 'Mensaje del error' );
    }

}
