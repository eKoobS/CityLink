import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {CategoriasService} from '../../services/categorias.service';
import {CategoriesInterface} from '../../interfaces/categorias.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categoria:CategoriesInterface[] = [];
  constructor( private afAuth: AngularFireAuth,
               private ServicioCategorias:CategoriasService,
               private activeRoute: ActivatedRoute,
               private router: Router) {

    afAuth.auth.onAuthStateChanged( (user) =>{
      if(user == null){
        window.location.href = '#/login';
      }
    })

      this.categoria=this.ServicioCategorias.getCategoriasServicio();

  }

  ngOnInit() {

  }

  verServicio(id:string){
    this.router.navigate(['/usuarios', id]);
    for(let c in this.categoria){
      if(id == this.categoria[c].id){
        console.log(this.categoria[c]);
      }
    }
  }

}
