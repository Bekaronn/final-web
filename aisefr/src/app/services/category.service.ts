import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, RealProduct } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { MainCategory, SuperCategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _url: string = "http://localhost:8000/api"
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this._url}/categories/`
    )
  }

  getSuperCategories(): Observable<MainCategory[]>{
    return this.http.get<MainCategory[]>(
      `${this._url}/supercategory/`
    )
  }

  getMainCategories(id: string): Observable<SuperCategory[]>{
    return this.http.get<SuperCategory[]>(
      `${this._url}/supercategory/${id}/maincategory`
    )
  }

  getCategoryByMainCategory(id: string): Observable<Category[]>{
    return this.http.get<Category[]>(
      `${this._url}/maincategory/${id}/category`
    )
  }

  getProductsByCategories(id: string): Observable<RealProduct[]>{
    return this.http.get<RealProduct[]>(
      `${this._url}/category/${id}/products`
    )
  }
}
