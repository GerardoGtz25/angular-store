import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from './../../../models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<ProductI[]>;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
