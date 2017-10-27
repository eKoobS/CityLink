import {Component, OnInit, ElementRef} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {commentInterface} from "../../../../interfaces/comentario.interface";
import{DatePipe} from "@angular/common";

@Component({
  selector: 'app-enviar-comentario',
  templateUrl: './enviar-comentario.component.html',
  styleUrls: ['./enviar-comentario.component.scss']
})
export class EnviarComentarioComponent implements OnInit {

    userEmail: string;
    username: string;
    userPhoto: string;
    comments: FirebaseListObservable<any>;
    currentDate = new Date();

    constructor(db: AngularFireDatabase,
                private  afAuth: AngularFireAuth,
                private elementRef: ElementRef) {
        this.getUserData();
        this.comments = db.list('prestadoresServicios/servicios/comentarios')
    }

    ngOnInit() {
    }


    getUserData() {
        this.afAuth.auth.onAuthStateChanged((user) => {
            this.userEmail = user.email;
            this.username = user.displayName;
            this.userPhoto = user.photoURL;
            console.log(this.userPhoto)
        })
    }


    sendComment(txtcomment:string){

       let comment:commentInterface={
            nombreUsuario:this.username,
            foto:this.userPhoto,
            comentario:txtcomment,
            poderComentar:false,
            fecha: this.currentDate.toString()
        };
        this.comments.push(comment);
    }

}
