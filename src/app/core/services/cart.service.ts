import { Injectable } from '@angular/core';
import { ProductI } from './../../models/product.model';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: ProductI[] = [];
  private cart = new BehaviorSubject<ProductI[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  // TODO: Hacer una manera para que persista datos despues de recargar
  addCart(product: ProductI) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
