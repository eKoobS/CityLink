import {Component, OnInit, ElementRef} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {observable} from "rxjs/symbol/observable";


@Component({
    selector: 'app-comentario',
    templateUrl: './comentario.component.html',
    styleUrls: ['./comentario.component.scss'],
    inputs: ['photo', 'userName', 'comment', 'date','hola']
})
export class ComentarioComponent implements OnInit {

    comments:FirebaseListObservable<any[]>;

    constructor(private af:AngularFireDatabase) {

    }

    ngOnInit() {
        this.comments=this.af.list('prestadoresServicios/servicios/comentarios');
    }
}
