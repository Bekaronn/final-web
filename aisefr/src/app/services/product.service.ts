import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, RealProduct} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = "http://localhost:8000/api"
  constructor(private http: HttpClient) { }

  getProductsById(id: string): Observable<RealProduct>{
    return this.http.get<RealProduct>(
      `${this._url}/products/${id}`
    )
  }
}
