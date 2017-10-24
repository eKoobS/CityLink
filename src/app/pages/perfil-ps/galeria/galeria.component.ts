import { Component, OnInit } from '@angular/core';
import {userProviderService} from "../../../services/userProvider.service";
import {photoGalleryInterface} from "../../../interfaces/galeria.interface";


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
    galeriaFotos:photoGalleryInterface[]=[];

  constructor(private psService: userProviderService) {

  }

  ngOnInit() {
      this.galeriaFotos=this.psService.getGalleryPhotos();
      console.log(this.galeriaFotos);
  }



}
