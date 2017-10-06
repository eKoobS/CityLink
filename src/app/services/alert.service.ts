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
}