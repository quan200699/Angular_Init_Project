import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('', Validators.required),
    category: new FormControl()
  });
  product: Product = {};
  id: number;
  categories: Category[] = [];
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.productService.getById(this.id).subscribe(product => {
        this.product = product;
        this.editProductForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name, Validators.required),
          category: new FormControl(this.product.category.id)
        })
      });
    })
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, error => console.log(error));
  }

  editProduct() {
    let product = this.editProductForm.value;
    product.category = {
      id: product.category
    }
    this.productService.edit(this.id, product).subscribe();
  }

  get name(){
    return this.editProductForm.get('name');
  }
}
