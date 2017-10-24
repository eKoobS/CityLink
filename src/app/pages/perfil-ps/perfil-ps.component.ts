//componentes
import {Component, OnInit} from '@angular/core';

//interfaces
import {providerInterface} from '../../interfaces/perfil_ps.interface';
import {aboutServiceProviderInterface} from "../../interfaces/acerca_de.interface";

// servicios
import {userProviderService} from "../../services/userProvider.service";
import {alertService} from "../../services/alert.service";
import {photoGalleryInterface} from "../../interfaces/galeria.interface";

@Component({
    selector: 'app-perfil-ps',
    templateUrl: './perfil-ps.component.html',
    styleUrls: ['./perfil-ps.component.scss']
})
export class PerfilPSComponent implements OnInit {

    //variable para mandar a llamar el servicio tipo []
    datosPsServicio: providerInterface;

    showHeart:boolean=false;
    showHeartFull:boolean = true;
    // showHeart:boolean=true;


    tab: string = 'acercaDe';

    constructor(private psService: userProviderService,
                private swal: alertService) {
    }

    ngOnInit() {
        this.datosPsServicio = this.psService.getProviderInfo();

    }

}
