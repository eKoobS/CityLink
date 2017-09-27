import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../shared/shared.module";

import { LoginComponent } from "./login.component";

const LOGIN_ROUTE = [
  { path: '', component: LoginComponent }
];

@NgModule ({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(LOGIN_ROUTE)
  ]
})

export class LoginModule {  }