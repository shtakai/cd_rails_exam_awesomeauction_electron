import { Component, OnInit } from '@angular/core'
import {
  HTTP_PROVIDERS,
  Http,
  Request,
  Response,
  JSONP_PROVIDERS,
  Jsonp,
  URLSearchParams
} from '@angular/http';
import { Auction } from './auction'
import { AuctionService } from './auction.service'
@Component({
   selector: 'auction-list',
   template: `
    <h1>auction list</h1>
    <button (click)="clickButton()">Button</button>
    <div *ngIf=(auctions)>
      test
      <div *ngFor="let auction of auctions">
        {{ auction.product_name }}
      </div>
    </div>
   `,
   //templateUrl: 'app/auction-list.component.html',
   providers: [AuctionService],
})
export class AuctionListComponent implements OnInit {
  auctions: Auction[]

  constructor(
    private service: AuctionService,
    private http: Http
  ){
     console.log('startt;t')
  }

  ngOnInit() {
     console.log('ngOnInit')

  }

  clickButton() {
    console.log('clicked')

    let url = 'http://localhost:3000/api/v1/auctions'
    this.http.request(new Request({
      method: "Get",
      url: url
    })).subscribe((res: Response) => {
      //console.log(res.json().auctions)
      this.auctions = res.json().auctions
      for(let auction of this.auctions){
         console.log(auction.product_name)
      }

      //this.status = res.status
      //this.body = res.json()
    })
  }
}
