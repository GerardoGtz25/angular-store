import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { ProductI } from '../../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductI;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id) {
    this.productService.getProduct(id)
      .subscribe((product: ProductI) => {
        this.product = product;
      });
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
}
