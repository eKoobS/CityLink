import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  parametro:string;

  constructor() { }

  ngOnInit() {
  }

    getParameterByName(name:string) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.hash);
        this.parametro = results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

        debugger;
    }

}
