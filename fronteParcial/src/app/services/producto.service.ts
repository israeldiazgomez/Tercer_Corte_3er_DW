import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_url = 'http://localhost:5002';
  base_path = `${this.api_url}/producto`
  constructor(
    private http: HttpClient
  ) { }
  getproducto(): Observable<ProductoI[]>{
    return this.http.get<ProductoI[]>(this.base_path)
  }
  create(data: ProductoI): Observable<ProductoI>{
    return this.http.post<ProductoI>(this.base_path, data)
  } 
}