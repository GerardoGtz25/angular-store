import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductI } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductI;
  @Output() productClicked: EventEmitter<ProductI> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product);
  }
}
