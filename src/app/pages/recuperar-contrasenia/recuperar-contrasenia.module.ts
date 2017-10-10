import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';

import { RecuperarContraseniaComponent } from "./recuperar-contrasenia.component";

//Services
import {alertService} from '../../services/alert.service'

const RECUPERARCONTRASENIA_ROUTE = [
  { path: '', component: RecuperarContraseniaComponent }
];

@NgModule ({
  declarations: [
      RecuperarContraseniaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(RECUPERARCONTRASENIA_ROUTE)
  ],
    providers: [
        alertService
    ]
})

export class RecuperarContraseniaModule {  }
