import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductI } from '../../../models/product.model';

import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: ProductI[] = [];

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get<ProductI[]>(`${environment.url_api}/products`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getProduct(id: string) {
    return this.http.get<ProductI>(`${environment.url_api}/products/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createProduct(product: ProductI) {
    return this.http.post(`${environment.url_api}/products`, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateProduct(id: string, changes: Partial<ProductI>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getRandomUser(): Observable<User[]> {
    return this.http.get('https://randomasduser.me/api/?results=2')
    .pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  public getFile() {
    return this.http.get('assets/files/test.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('ups algo salio mal');
  }
}
