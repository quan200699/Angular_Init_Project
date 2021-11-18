import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(productForm) {
    this.productService.create(productForm.value);
    productForm.resetForm();
    // this.router.navigate(['/products']);
    this.router.navigateByUrl('/products')
  }

}
