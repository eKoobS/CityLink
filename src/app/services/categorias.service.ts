import {Injectable} from '@angular/core';
import {CategoriesInterface} from '../interfaces/categorias.interface';

@Injectable()
export class CategoriasService {

    categoriasServicio:CategoriesInterface[]=[];

    constructor() {
    }

    getCategoriasServicio(){
        this.categoriasServicio=[{
            nombreServicio:'Plomería',
            img:'../../assets/images/plomero2.PNG',
            id:'plomero123',
            color:'#2574A9'
        },
        {
            nombreServicio:'Herrería',
            img:'../../assets/images/herrero2.PNG',
            id:'herrero123',
            color:'#BDC3C7'
        },
        {
            nombreServicio:'Carpintería',
            img:'../../assets/images/otro.PNG',
            id:'carpinteria',
            color:'#FABE58'
        },
        {
            nombreServicio:'Jardinería',
            img:'../../assets/images/otro.PNG',
            id:'albañiñ123',
            color:'#26A65B'
        },
        {
            nombreServicio:'Electricista',
            img:'../../assets/images/electrico.PNG',
            id:'electrisista123',
            color:'#E67E22'
        },
        {
            nombreServicio:'Niñera',
            img:'../../assets/images/otro.PNG',
            id:'niñera123',
            color:'#E08283'
        }]

        return this.categoriasServicio;
    }

}
