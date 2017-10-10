import {Injectable} from '@angular/core';
import swal from 'sweetalert2'
import {promise} from "selenium-webdriver";
import {reject} from "q";

@Injectable()
export class alertService {

    constructor() {
    }

    error(title:string, message:string){
        swal(
            title,
            message,
            'error'
        )
    }
    infoTerms(title:string) {
       return new Promise((resolve =>{
           swal({
               title: title,
               type: 'info',
               html:
               ' <div style="height: 500px; overflow-y: auto">' +
               '<p>.kjbñjboho</p>' +
               '<p>.kjbñjboho</p>' +
               '<p>.kjbñjboho</p>' +
               '<p>.kjbñjboho</p>' +
               '<p>.kjbñjboho</p>' +
               '</div> '
               ,
               showCloseButton: true,
               confirmButtonText:
                   '<i class="fa fa-thumbs-up"></i> Acepto'
           }).then(function () {
               resolve();
           })
       }))
    }
    confirm(title:string, message:string) {

        return new Promise((resolve => {

            swal({
                title: title,
                text: message,
                type: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then(function () {
                resolve();
            })

        }))

    }

    success(title:string,message:string){
        return new Promise((resolve)=>{
            swal({
                title:title,
                text:message,
                type:'success',
                confirmButtonText: 'OK'
            }).then(function () {
                resolve();
            })
        })
    }
}