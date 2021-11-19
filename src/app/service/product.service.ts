import {Injectable} from '@angular/core';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/products/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/products', product);
  }

  edit(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8080/products/${id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete(`http://localhost:8080/products/${id}`);
  }
}
