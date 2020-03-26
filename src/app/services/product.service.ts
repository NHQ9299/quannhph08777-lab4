import { Injectable } from '@angular/core';
import {data} from '../data';
import {Product} from '../Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SService {
  api = 'https://5e7b6a340e0463001633330c.mockapi.io';

  constructor(
    private http: HttpClient
  ) { }

getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/product`);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/product/${id}`);
  }

  removeProduct(id){
  }
  addProduct(product){

  }
}