import {Component, OnInit} from '@angular/core';
import {userRegister} from "../../interfaces/user.interface";
import {NgForm} from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    ShowVerifyPass: boolean = false;
    ShowPassRegister: boolean = false;
    view: string = "login";
    showPassLogin: boolean = false;
    userRegister: userRegister[] = [];
    verifyEmail:boolean = false;


    // radioTerms : boolean=false;
    registerUser(user: userRegister) {
        if (user.terms == false || user.terms == null) {
            console.log("Acepte los terminos y condiciones para proceder");
        }else if(user.email == "" || user.email == null){
            this.verifyEmail = true;
        }
    }

    constructor() {
    }

    ngOnInit() {
    }

}
