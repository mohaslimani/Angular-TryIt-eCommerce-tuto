import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // The async pipe returns the latest value from a stream of data and continues to do so for the life of a given component. When Angular destroys that component, the async pipe automatically stops.
  // the Async in html makes us get rid of using the subscribe to the observable
  constructor(private cart: CartService) {}
  shippingCost = this.cart.getShippingPrices();

  // here we didnt use the async but we did use a subscription to the data
  // and we will use it as we want in the arrow function
  // shippingCost: any;
  ngOnInit(): void {
    // this.cart
    //   .getShippingPrices()
    //   .subscribe((data) => (this.shippingCost = data));
  }
}
