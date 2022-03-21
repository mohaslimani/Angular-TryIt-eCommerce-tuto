import { Component, OnInit } from '@angular/core';
import { products, Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // ActivatedRoute contains information about the route and the route's parameters.
  // By injecting ActivatedRoute, you are configuring the component to use a service.
  constructor(private r: ActivatedRoute, private myCart: CartService) {}

  ngOnInit(): void {
    // get the products id from the route
    const rotParams = this.r.snapshot.paramMap;
    const productId = Number(rotParams.get('productId'));

    // find our product in db
    this.product = products.find((p) => p.id === productId);
  }

  addToCart(p: Product) {
    this.myCart.addToCart(p);
    window.alert(p.name + ' was added to your bbass!!!!!!!!');
  }
}
