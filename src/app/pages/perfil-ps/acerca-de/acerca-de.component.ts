import { Component, OnInit } from '@angular/core';
import {acerca_deInterface} from "../../../interfaces/acerca_de.interface";
import {acerca_DeService} from "../../../services/acerca-de.service";


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  constructor(private adUserService:acerca_DeService) { }
    datosAcercaDeUser:acerca_deInterface;
  ngOnInit() {
    this.datosAcercaDeUser=this.adUserService.getDatosAcercaDeServicio();
    console.log(this.datosAcercaDeUser)
  }

}
