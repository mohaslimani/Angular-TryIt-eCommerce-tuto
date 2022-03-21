import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent implements OnInit {
  //PASS DATA TO A CHILD COMPONENT ------------------------------------------------------------------
  // To set up ProductAlertsComponent to receive product data, first import Input from @angular/core
  // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Input() p!: Product;
  // without ! error : To set up ProductAlertsComponent to receive product data, first import Input from @angular/core
  // That's the non-null assertion operator. It is a way to tell the compiler "this expression cannot be null or undefined here, so don't complain about the possibility of it being null or undefined."
  // let sampleVar = obj!.field;
  // this is another solution to the init var problem
  // @Input() product: Product | undefined;
  // Pass data to a PARENT component -----------------------------------------------------------------
  // Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  @Output() n = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
