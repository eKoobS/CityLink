import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.component.html',
  styleUrls: ['./verificar-email.component.scss']
})
export class VerificarEmailComponent implements OnInit {

  animatedIcon:boolean=true;
    userInfoBasic:any;
  constructor(db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {

      setInterval(() => {
          this.animatedIcon = !this.animatedIcon;
      }, 2000);
      afAuth.auth.onAuthStateChanged((user)=> {
          // console.log(user)
          this.userInfoBasic=user;
      });
  }

  verifyEmail(){
      // this.afAuth.auth.applyActionCode(code);
      this.afAuth.auth.applyActionCode("").then(response =>{
          
      }).catch((error:any) =>{

      })
  }

  ngOnInit() {
  }

}
