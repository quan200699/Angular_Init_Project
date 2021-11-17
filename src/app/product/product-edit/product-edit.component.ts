import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('', Validators.required)
  });
  @Output()
  eventEmitter: EventEmitter<Product> = new EventEmitter<Product>();
  @Input()
  product: Product = {};
  constructor() { }

  ngOnInit() {
    this.editProductForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name, Validators.required)
    })
  }

  editProduct() {
    this.eventEmitter.emit(this.editProductForm.value);
    this.editProductForm.reset();
  }

  get name(){
    return this.editProductForm.get('name');
  }
}
