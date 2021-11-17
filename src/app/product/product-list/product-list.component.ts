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
  isShowEditedForm = false;
  title = 'Hello'
  index = -1;

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

  showEditForm(i: number) {
    this.isShowEditedForm = !this.isShowEditedForm;
    this.index = i;
  }

  editProduct(product) {
    this.products[this.index] = product;
  }
}
