import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateText'
})
export class AbbreviateTextPipe implements PipeTransform {


  transform(value: string): string {
    let text:string;

    text="@";
      for(let i=0;i<value.length;i++){
        if(value[i]=='@'||i==17){
          break;
        }else{
          text += value[i];
        }
      }
    return text;
  }

}
