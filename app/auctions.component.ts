import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Auction }                from './auction';
import { AuctionService }         from './auction.service';

@Component({
  selector: 'my-auctions',
  template: `
    <h1>auctions</h1>
    <div *ngFor="let auction of auctions" (click)="onSelect(auction)">
    </div>
    <button (click)="onClick">Button</button>
  `,
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[];
  selectedAuction: Auction;
  error: any;

  constructor(
    private auctionService: AuctionService) { }

  ngOnInit() {
    console.log('start');
  }

  onSelect(auction: Auction) {
    this.selectedAuction = auction;
  }

}
