import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, error => console.log(error));
  }

  submit(productForm) {
    let product = productForm.value;
    product.category = {
      id: product.category
    }
    this.productService.create(product).subscribe(() => {
      productForm.resetForm();
      this.router.navigateByUrl('/products');
    }, error => {
    });
  }

}
