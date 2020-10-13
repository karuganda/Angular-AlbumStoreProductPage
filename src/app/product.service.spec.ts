import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

import { Http } from "@angular/http";
import { Response } from "@angular/http";

describe('ProductService', (private _http: Http) => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
