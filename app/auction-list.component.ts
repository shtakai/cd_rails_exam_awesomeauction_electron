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
import { Bid } from './bid'
import { AuctionService } from './auction.service'
@Component({
   selector: 'auction-list',
   template: `
    <h1>auction list</h1>
    <div *ngIf=(auction)>
      <h2>Auction Info</h2>
      <ul>
        <li>ID:{{ auction.id }}</li>
        <li>Product Name:{{ auction.product_name }}</li>
        <li>Description:{{ auction.description }}</li>
        <li>End Date:{{ auction.end_date }}</li>
        <li>Highest Price:{{ auction.highest_price }}</li>
      </ul>
      <h3>Bids</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Bid Date</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let bid of bids">
            <td>{{ bid.id }}</td>
            <td>{{ bid.price }}</td>
            <td>{{ bid.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button (click)="clickButton()">Button</button>
    <div *ngIf=(auctions)>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>End Date</th>
            <th>Highest Price</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let auction of auctions" (click)="getAuction(auction)">
            <th>{{ auction.id }}</th>
            <th>{{ auction.product_name }}</th>
            <th>{{ auction.description }}</th>
            <th>{{ auction.end_date }}</th>
            <th>{{ auction.highest_price }}</th>
          </tr>
        </tbody>
      </table>
    </div>
   `,
   //templateUrl: 'app/auction-list.component.html',
   providers: [AuctionService],
})
export class AuctionListComponent implements OnInit {
  auctions: Auction[]
  bids: Bid[]
  auction: Auction

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

  getAuction(auction){
    console.log('getAuction');
    console.log('auction', auction.id)
    let url = `http://localhost:3000/api/v1/auctions/${auction.id}`
    this.http.request(new Request({
      method: "Get",
      url: url
    })).subscribe((res: Response) => {
      //console.log(res.json().auctions)
      this.auction = res.json().auction
      this.bids = this.auction.bids
    })
  }
}
