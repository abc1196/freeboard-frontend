import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipePipe'
})
export class FilterPipePipe implements PipeTransform {

   transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
          console.log(value);
            return value.name.filter(function (el: any) {
                return el.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    }

}
