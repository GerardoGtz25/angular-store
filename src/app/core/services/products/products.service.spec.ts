import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { ProductsService } from './products.service';

fdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('should return products', () => {
      const expectData = [
        {
          id: '1',
          title: 'asasas',
          description: 'assasas',
          image: 'img/img.png'
        },
        {
          id: '1',
          title: 'asasas',
          description: 'assasas',
          image: 'img/img.png'
        }
      ];

      let dataError;
      let dataResponse;

      service.getAllProducts().subscribe(response => {
        dataResponse = response;
      }, error => {
        dataError = error;
      });

      const req = httpTestingController.expectOne(`${environment.url_api}/products`);

      req.flush(expectData);

      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
