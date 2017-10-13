import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';

import {  CategoriasComponent } from './categorias.component';

//Services
import {alertService} from '../../services/alert.service'

const   CATEGORIAS_ROUTE = [
    { path: '', component: CategoriasComponent}
];

@NgModule ({
    declarations: [
        CategoriasComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(CATEGORIAS_ROUTE)
    ],
    providers: [
        alertService
    ]
})

export class CategoriasModule {  }