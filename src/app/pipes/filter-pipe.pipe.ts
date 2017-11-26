import {Auctions} from '../models/auctions';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'FilterPipePipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(auctions: Auctions[], args: any): any {
    return auctions.filter(auction => auction.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
  }


}
