import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {

    months:string[] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    transform(dateValue: string): string {
        let date = new Date(dateValue);

        return date.getDay() + " de " + this.months[date.getMonth()] + " del " + date.getFullYear() + " a las " + date.getHours() + ":" +  date.getMinutes();;
    }


}