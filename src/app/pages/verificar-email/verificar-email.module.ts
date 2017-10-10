import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';

import {  VerificarEmailComponent } from './verificar-email.component';

//Services
import {alertService} from '../../services/alert.service'

const   VERIFICAREMAIL_ROUTE = [
  { path: '', component: VerificarEmailComponent}
];

@NgModule ({
  declarations: [
    VerificarEmailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(VERIFICAREMAIL_ROUTE)
  ],
    providers: [
        alertService
    ]
})

export class VerificarEmailModule {  }
