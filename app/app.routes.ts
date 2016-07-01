import { provideRouter, RouterConfig }  from '@angular/router';

import { AuctionsComponent } from './auctions.component';

export const routes: RouterConfig = [
  {
    path: 'auctions',
    component: AuctionsComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
