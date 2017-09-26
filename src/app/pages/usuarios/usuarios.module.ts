import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";

import { UsuariosComponent } from "./usuarios.component";

const USUARIOS_ROUTE = [
  { path: '', component: UsuariosComponent }
];

@NgModule ({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(USUARIOS_ROUTE)
  ]
})

export class UsuariosModule {  }
