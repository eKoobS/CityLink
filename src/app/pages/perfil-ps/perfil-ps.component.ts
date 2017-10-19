//componentes
import {Component, OnInit} from '@angular/core';

//interfaces
import {perfil_psInterface} from '../../interfaces/perfil_ps.interface';
import {acerca_deInterface} from "../../interfaces/acerca_de.interface";

// servicios
import {perfil_psService} from "../../services/perfil-ps.service";
import {alertService} from "../../services/alert.service";

@Component({
    selector: 'app-perfil-ps',
    templateUrl: './perfil-ps.component.html',
    styleUrls: ['./perfil-ps.component.scss']
})
export class PerfilPSComponent implements OnInit {

    //variable para mandar a llamar el servicio tipo []
    datosPsServicio: perfil_psInterface;
    showHeart:boolean=false;
    // showHeart:boolean=true;


    tab: string = 'acercaDe';

    constructor(private psService: perfil_psService,
                private swal: alertService) {
    }

    ngOnInit() {
        this.datosPsServicio = this.psService.getDatos_psServicio();
    }

}
