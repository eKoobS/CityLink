import {Injectable} from "@angular/core";
import {perfil_psInterface} from "../interfaces/perfil_ps.interface";

@Injectable()
export class perfil_psService {


    constructor() {

    }

    getDatos_psServicio() {
        let DatosPsServicio: perfil_psInterface = {
            nombrePrestador: 'Paola Gama',
            puntuacion: '',
            telefono: 6621501365,
            horario: 'L M Mi J V'
        };

        return DatosPsServicio;
    }

}