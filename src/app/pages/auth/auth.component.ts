import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    view: string;

    animatedIcon:boolean=true;
    userInfoBasic:any;


    constructor(private afAuth: AngularFireAuth) {
        this.view=this.getParameterByName("mode");
        if(this.view=="verifyEmail"){
            this.verifyEmail();
        }

        setInterval(() => {
            this.animatedIcon = !this.animatedIcon;
        }, 2000);
        afAuth.auth.onAuthStateChanged((user)=> {
            // console.log(user)
            this.userInfoBasic=user;
        });
    }

    ngOnInit() {
    }

    verifyEmail() {
        this.afAuth.auth.applyActionCode(this.getParameterByName("oobCode")).then(response => {

        }).catch((error: any) => {
            console.log(error.code);
        })

    }

    getParameterByName(name: string) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.hash);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

    }

}
