import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  @Input()
  title: string = 'Product create form';
  // product: Product = {};
  @Output()
  eventEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  submit(productForm) {
    this.eventEmitter.emit(productForm.value);
    productForm.resetForm();
  }

}
