import {Auctions} from '../models/auctions';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(auctions: Auctions[], callback: (auction: Auctions) => boolean): any {
    if (!auctions || !callback) {
      return auctions;
    }
    return auctions.filter(auction => callback(auction));
  }

}
