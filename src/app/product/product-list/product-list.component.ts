import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Product[] = [];
  isShowCreatedForm = false;

  constructor() {
  }

  ngOnInit() {
  }

  changeStatus() {
    this.isShowCreatedForm = !this.isShowCreatedForm;
  }

  addNewProduct(product) {
    this.products.push(product);
  }
}
