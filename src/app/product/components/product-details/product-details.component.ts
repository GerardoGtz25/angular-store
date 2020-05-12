import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../../core/services/products/products.service';
import { ProductI } from '../../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product$: Observable<ProductI>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => this.productService.getProduct(params.id))
    );
  }

  createProduct() {
    const newProduct: ProductI  = {
      id: '123',
      title: 'Apple Products',
      price: 20000,
      description: 'New Brand',
      image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    };

    this.productService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const newProduct: Partial<ProductI> = {
      price: 30000,
      description: 'Editado'
    };

    this.productService.updateProduct('123', newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct(id) {
    console.log(id);
    this.productService.deleteProduct(id)
      .subscribe(product => {
        console.log(product);
      });
  }

  getRandomUsers() {
    this.productService.getRandomUser()
      .subscribe(users => {
        console.log(users);
      },
      error => {
        console.error(error);
      }
    );
  }
}
