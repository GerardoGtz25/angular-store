import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id) {
    this.productsService.deleteProduct(id)
      .subscribe(response => {
        console.log(response);
        if (response) {
          this.deleteFromMemory(id);
        }
      });
  }

  deleteFromMemory(id) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
