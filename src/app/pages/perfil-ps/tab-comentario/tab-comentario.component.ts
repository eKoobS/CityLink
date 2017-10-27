import {Component, OnInit} from '@angular/core';
import {commentInterface} from "../../../interfaces/comentario.interface";
import{AngularFireDatabase,FirebaseListObservable} from "angularfire2/database";

@Component({
    selector: 'app-tab-comentario',
    templateUrl: './tab-comentario.component.html',
    styleUrls: ['./tab-comentario.component.scss']
})
export class TabComentarioComponent implements OnInit {

    comments:FirebaseListObservable<any[]>;
    comments2:string[]=['hola'];

    constructor(private af:AngularFireDatabase) {

    }

    ngOnInit() {
        this.comments=this.af.list('prestadoresServicios/servicios/comentarios');
    }

}
