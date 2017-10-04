import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {userRegister} from "../../interfaces/user.interface";



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
    errorEmail:boolean = false;
    @ViewChild('email') private elementRef: ElementRef;

    // radioTerms : boolean=false;
    registerUser(user: userRegister) {
        if (user.terms == false || user.terms == null) {
            console.log("Acepte los terminos y condiciones para proceder");
        }else if(user.email == "" || user.email == null){
            this.errorEmail = true;
            this.elementRef.nativeElement.focus();
           setTimeout(() => {
                this.errorEmail=false;
            }, 2000);

        }else {
            this.errorEmail = false;
        }
    }





    constructor() {

    }

    ngOnInit() {
    }

}
