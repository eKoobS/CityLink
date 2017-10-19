import {Injectable} from "@angular/core";
import {acerca_deInterface} from "../interfaces/acerca_de.interface";

@Injectable()
export class acerca_DeService {


    constructor() {

    }

    getDatosAcercaDeServicio() {
        let datosAcercaDe: acerca_deInterface = {
            descripcionServicio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate distinctio doloremque ea facere inventore iusto, magnam maiores, nam nisi officiis quas reiciendis sequi similique sint suscipit temporibus tenetur voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate distinctio doloremque ea facere inventore iusto, magnam maiores, nam nisi officiis quas reiciendis sequi similique sint suscipit temporibus tenetur voluptatibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate distinctio doloremque ea facere inventore iusto, magnam maiores, nam nisi officiis quas reiciendis sequi similique sint suscipit temporibus tenetur voluptatibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            trabajosRealizados: [
                {
                    trabajo: "Reparar Fugas"
                },
                {
                    trabajo: "Reparar Tuberias"
                },
                {
                    trabajo: "Reparar Llaves de paso"
                }],
            telefono: 6621501365,
            whatsapp: 6623397376,
            email: 'paolaggd@gmail.com ',
            calle: 'Navojoa',
            numero: '1231',
            colonia: 'Camino Real',
            cp: 83178,
            horario: 'L M M J V'
        };

        return datosAcercaDe;
    }

}