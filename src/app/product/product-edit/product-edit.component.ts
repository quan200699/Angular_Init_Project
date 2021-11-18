import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

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
  product: Product = {};
  id: number;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.product = this.productService.getById(this.id);
      this.editProductForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name, Validators.required)
      })
    })
  }

  ngOnInit() {
  }

  editProduct() {
    this.productService.edit(this.id, this.editProductForm.value)
  }

  get name(){
    return this.editProductForm.get('name');
  }
}
