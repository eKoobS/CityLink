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
    infoTerms(title:string){
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
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '<p>.kjbñjboho</p>' +
            '</div> '
            ,
            showCloseButton: true,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Acepto!'
        })

    }
}