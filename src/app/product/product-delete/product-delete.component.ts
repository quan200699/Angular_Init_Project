import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {};
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.productService.getById(this.id).subscribe(product => {
        this.product = product;
      });
    });
  }

  ngOnInit() {
  }

  delete() {
    this.productService.delete(this.id).subscribe(() => {
      this.router.navigateByUrl('/products');
    });
  }

}
