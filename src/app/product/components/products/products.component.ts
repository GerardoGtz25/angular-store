import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../../models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductI[] = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
    });
  }

  clickProduct(product: ProductI) {
    console.log(product);
  }

}
