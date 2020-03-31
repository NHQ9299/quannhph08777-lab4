import { Injectable } from '@angular/core';
import {data} from '../data';
import {Product} from '../Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SService {
  api = 'https://5e7b6a340e0463001633330c.mockapi.io/product';

  constructor(
    private http: HttpClient
  ) { }

getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}`);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
  }

  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}