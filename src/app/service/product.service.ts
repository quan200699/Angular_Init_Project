import {Injectable} from '@angular/core';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 13'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  getById(index: number){
    return this.products[index];
  }

  create(product: Product) {
    this.products.push(product);
  }

  edit(index: number, product: Product) {
    this.products[index] = product;
  }

  delete(index: number) {
    this.products.splice(index, 1);
  }
}
