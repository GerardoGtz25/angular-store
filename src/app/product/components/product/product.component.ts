import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductI } from '../../../models/product.model';


import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductI;
  @Output() productClicked: EventEmitter<ProductI> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addCart() {
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product);
  }
}
