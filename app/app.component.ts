import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { AuctionListComponent } from './auction-list.component'

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <auction-list></auction-list>
  `,
  directives: [
    AuctionListComponent
  ],
  providers: [
  ]
})
export class AppComponent {
  title = 'Awesome Auction';
}

