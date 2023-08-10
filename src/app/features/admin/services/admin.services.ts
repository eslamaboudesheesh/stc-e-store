import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { productViewModel } from '../models/ProductView';
@Injectable({
  providedIn: 'root',
})
export class AdminServices {
  constructor(private http: HttpClient) {}

  public GetProducts() {
    return this.http.get('https://fakestoreapi.com/products', {}).pipe(
      map((response) => {
        return response;
      })
    );
  }
  public GetProductById(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`, {}).pipe(
      map((response) => {
        return response;
      })
    );
  }
  public GetAllcategories() {
    return this.http
      .get('https://fakestoreapi.com/products/categories', {})
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public AddProducts(data: productViewModel | any) {
    return this.http.post('https://fakestoreapi.com/products', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public UpdateProducts(data: productViewModel | any, id: number) {
    return this.http.put(`https://fakestoreapi.com/products/${id}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public DeleteProduct(id: number) {
    return this.http.delete(`https://fakestoreapi.com/products/${id}`, {}).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
