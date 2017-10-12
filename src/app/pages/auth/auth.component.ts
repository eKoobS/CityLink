import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {alertService} from '../../services/alert.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    view: string;

    animatedIcon:boolean=true;
    userInfoBasic:any;


    constructor(private afAuth: AngularFireAuth,
                private alertService:alertService) {

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


    verifyEmail(){
        // this.afAuth.auth.applyActionCode(code);
        this.afAuth.auth.applyActionCode(this.getParameterByName("oobCode")).then(response =>{

        }).catch((error:any) =>{
            this.getFirebaseErrors(error.code);
        })
    }

    getFirebaseErrors(error:string){
        switch( error ){
            case 'auth/expired-action-code':
                this.alertService.confirm("Oooops!, huston we have a problem!","Este enlace ya ha sido utilizado");
                break;

            case 'auth/invalid-action-code':
                this.alertService.confirm("Enlace invalido","Este enlace no existe, intente con otro");
                break;

            case 'auth/user-disabled':
                this.alertService.confirm("Usuario deshabilitado","Tu usuario ha sido bloqueado por " +
                                                "alguna razon contacta al administrador");
                break;

            case 'auth/user-not-found':
                this.alertService.confirm("Usuario no encontrado","No pudimos enviarte el codigo de verificacion" +
                    " debido a que no encontramos tu usuario");
                break;
        }

    }

    getParameterByName(name: string) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.hash);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

    }

}
