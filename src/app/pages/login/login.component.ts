import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ShowVerifyPass:boolean=false;
  ShowPassRegister:boolean=false;

  view:string = "login";
  showPassLogin:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
