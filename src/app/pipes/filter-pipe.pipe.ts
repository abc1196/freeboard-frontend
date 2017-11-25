import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipePipe'
})
export class FilterPipePipe implements PipeTransform {

   transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.indexOf(input) > -1;
            });
        }
        return value;
    }

}
