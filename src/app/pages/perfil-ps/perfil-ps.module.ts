import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';


//Services
import {alertService} from '../../services/alert.service'
import {PerfilPSComponent} from "./perfil-ps.component";

const PERFILPS_ROUTE = [
  { path: '', component: PerfilPSComponent }
];

@NgModule ({
  declarations: [
    PerfilPSComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(PERFILPS_ROUTE)
  ],
    providers: [
        alertService
    ]
})

export class PerfilPsModule {  }
