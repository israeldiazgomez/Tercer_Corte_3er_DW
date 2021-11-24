import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_url = 'http://localhost:5002';
  base_path = `${this.api_url}/cliente`
  constructor(
    private http: HttpClient
  ) { }
  getcliente(): Observable<ClienteI[]>{
    return this.http.get<ClienteI[]>(this.base_path)
  }
  create(data: ClienteI): Observable<ClienteI>{
    return this.http.post<ClienteI>(this.base_path, data)
  } 
}
