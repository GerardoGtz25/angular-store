import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductI } from '../../../models/product.model';

import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: ProductI[] = [];

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get<ProductI[]>(`${environment.url_api}/products`);
  }

  public getProduct(id: string) {
    return this.http.get<ProductI>(`${environment.url_api}/products/${id}`);
  }

  public createProduct(product: ProductI) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  public updateProduct(id: string, changes: Partial<ProductI>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  public deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
