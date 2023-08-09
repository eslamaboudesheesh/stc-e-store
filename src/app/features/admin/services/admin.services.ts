import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
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
}
