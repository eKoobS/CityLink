import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-filtros',
    templateUrl: './filtros.component.html',
    styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

    recommendeds: any[] = [
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Juan Bracamontes"
        },
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Paco Ramirez"
        },
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Jesus Gonzalez"
        },
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Maria Cuevas"
        },
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Pedro Lopez"
        },
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Vladimir Sanchez"
        },
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Fernanda Perez"
        },
        {
            foto: "../../../../assets/images/user.png",
            nombre: "Guacalupe Paredes"
        },
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
