import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private BASE_URL='https://api.escuelajs.co/api/v1'
  private MY_API_UTL='http://localhost:5244/api'

  constructor(private http:HttpClient) { }
 
  getCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${this.MY_API_UTL}/Category`)

  }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.MY_API_UTL}/Product`)
  }

  getProductById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.MY_API_UTL}/Product/${id}`)
  }
}

