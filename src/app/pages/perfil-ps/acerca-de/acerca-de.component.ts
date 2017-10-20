import { Component, OnInit } from '@angular/core';
import {aboutServiceProviderInterface} from "../../../interfaces/acerca_de.interface";
import{userProviderService} from "../../../services/userProvider.service";


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

    serviceProviderInfo:aboutServiceProviderInterface;

    constructor(private serviceProvider:userProviderService) {

    }

  ngOnInit() {

      this.serviceProviderInfo=this.serviceProvider.getServiceInfo();

  }

}
