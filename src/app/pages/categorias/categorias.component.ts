import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  constructor( private afAuth: AngularFireAuth) {

    afAuth.auth.onAuthStateChanged( (user) =>{
      if(user == null){
        window.location.href = '#/login';
      }
    })

  }

  ngOnInit() {
  }

}
