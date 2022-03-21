import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  i: Product[] = [];

  shipForm = this.ff.group({
    name: '',
    address: '',
    urNumber: 671,
  });
  constructor(private cc: CartService, private ff: FormBuilder) {}
  ngOnInit(): void {
    this.i = this.cc.getICart();
  }

  mySubmit(): void {
    this.i = this.cc.clearCart();
    console.warn('your order is commmming!', this.shipForm.value);
    this.shipForm.reset();
  }
}
