import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  i: Product[] = [];
  constructor(private htttp: HttpClient) {}

  addToCart(p: Product) {
    this.i = [...this.i, p];
  }

  removeFromCart(p: Product) {}

  getICart(): Product[] {
    return this.i;
  }

  clearCart(): Product[] {
    this.i = [];
    return this.i;
  }
  //
  getShippingPrices() {
    return this.htttp.get<{ type: string; price: number }[]>(
      '../../assets/shipping.json'
    );
  }
}
