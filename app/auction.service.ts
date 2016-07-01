import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Auction } from './auction';

@Injectable()
export class AuctionService {

  private auctionsUrl = 'http://localhost:3000/api/v1/auctions';  // URL to web api

  constructor(private http: Http) {
    console.log('----');
  }

  getAuctions(): Auction[] {
    return [new Auction()]
  }



  private handleError(error: any) {
    console.error('An error occurred', error);
  }
}
