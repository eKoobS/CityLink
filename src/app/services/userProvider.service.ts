import {Injectable} from "@angular/core";
import {providerInterface} from "../interfaces/perfil_ps.interface";
import {aboutServiceProviderInterface} from "../interfaces/acerca_de.interface";
import {photoGalleryInterface} from "../interfaces/galeria.interface";

@Injectable()
export class userProviderService {


    constructor() {

    }

    getProviderInfo() {
        let DatosPsServicio: providerInterface = {
            nombrePrestador: 'Paola Gama',
            puntuacion: '',
            telefono: 6621501365,
            horario: 'L M Mi J V'
        };

        return DatosPsServicio;
    }

    getServiceInfo() {
        let datosAcercaDe: aboutServiceProviderInterface = {
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

    getGalleryPhotos() {
        let galeriaFotos: photoGalleryInterface [] = [{
                imageUrl:'../../../../assets/images/trabajoAlbanileria2.JPG',
            // ../../../assets/images/trabajoAlbanileria2.JPG
                id: 'albanileria1'
            },
            {
                imageUrl:'../../../../assets/images/trabajoAlbanileria3.JPG',
                id: 'albanileria2'
            },
            {
                imageUrl:'../../../../assets/images/trabajoCarpinteria1.jpg',
                id: 'carpinteria1'
            },
            {
                imageUrl:'../../../../assets/images/ciudad.png',
                id: 'costura1'
            },
            {
                imageUrl:'../../../../assets/images/trabajoHerreria.jpg',
                id: 'herreria1'
            },
            {
                imageUrl:'../../../../assets/images/trabajoHerreria2.jpg',
                id: 'herreria2'
            }]

        return galeriaFotos;
    }

}