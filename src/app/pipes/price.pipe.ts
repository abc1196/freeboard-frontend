import {Auctions} from '../models/auctions';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'price'
})
export class PricePipe implements PipeTransform {

    transform(auctions: Auctions[], input: number): any {
        if (!auctions || !input) {

            console.log('no filter: ' + input);
            return auctions;
        }
        if (input == 1) {
            console.log('filtro funca: ' + input);
            return auctions.filter(auction => auction.price < 100000);
        } else if (input == 2) {
            console.log('filtro funca: ' + input);
            return auctions.filter(auction => auction.price >= 100000 && auction.price <= 500000);

        } else if (input == 3) {
            console.log('filtro funca: ' + input);
            return auctions.filter(auction => auction.price > 500000);

        } else {

            console.log('filtro raro: ' + input);
            return auctions;
        }
    }

}
