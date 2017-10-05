import {Injectable} from '@angular/core';
import swal from 'sweetalert2'

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
}