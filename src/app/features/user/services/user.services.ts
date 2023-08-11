import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http: HttpClient) {}

  //to get all data and grouping data
  public GetProducts() {
    return this.http.get('https://fakestoreapi.com/products', {}).pipe(
      map((response) => {
        return response;
      })
    );
  }
  public GetProduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`, {}).pipe(
      map((response) => {
        return response;
      })
    );
  }

  //for dropdown filter
  public GetAllcategories() {
    return this.http
      .get('https://fakestoreapi.com/products/categories', {})
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public GetProductByCategory(data: string) {
    return this.http
      .get(`https://fakestoreapi.com/products/category/${data}`, {})
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
