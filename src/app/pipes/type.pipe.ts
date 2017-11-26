import {Auctions} from '../models/auctions';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(auctions: Auctions[], args: string): any {
    if(args != '') {
    return auctions.filter(auction => auction.type.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    } else {
      return auctions;
    }
  }

}
