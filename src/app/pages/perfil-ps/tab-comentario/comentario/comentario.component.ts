import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import{AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import{observable} from "rxjs/symbol/observable";


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  userEmail:string;
  userName:string;
  userPhoto:string;
  comments:FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase,private  afAuth:AngularFireAuth) {
    this.getUserData()
      this.comments=db.list('/comentarios')
  }


  ngOnInit() {
  }
    getUserData(){
        this.afAuth.auth.onAuthStateChanged((user)=>{
            this.userEmail=user.email;
            this.userName=user.displayName;
            this.userPhoto=user.photoURL;
            console.log(this.userPhoto)
        })
    }
}
