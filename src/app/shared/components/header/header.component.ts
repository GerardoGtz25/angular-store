import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public total$: Observable<number>;

  constructor(private cartService: CartService) {
    // Esto retorna un observable o podrias subscribirte a total$
    // sin embargo se guarda en el Obsevable y se resuelve con el pipe async
    // esta manera evita tenerte que desubscribirte en OnDestroy
    this.total$ = this.cartService.cart$.pipe(
      map(products => products.length)
    );
  }

  ngOnInit() {
  }

}
