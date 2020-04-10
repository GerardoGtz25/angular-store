import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../models/product.model';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: any;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  clickProduct(product: ProductI) {
    console.log(product);
  }

}
