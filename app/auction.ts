import { Bid } from './bid'
export class Auction {
  id: number
  product_name: string
  description: string
  status: string
  end_date: string
  highest_price: number
  bids: Bid[]
}
