import {Component} from '@angular/core';
import {Product} from './model/product';

@Component({
  selector: 'app-quan', //selector để gọi bên html
  templateUrl: './app.component.html', //định nghĩa file html mà component này đang sử dụng
  // template: '<h1>Hello</h1>', //để viết code html trực tiếp tại file ts
  styles: [''], //để viết code css tại file ts
  styleUrls: ['./app.component.css'] // để dẫn đường dẫn đến file css
})
export class AppComponent {
  title = 'first-angular-project';
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 13'
    },
    {
      id: 2,
      name: 'IPhone 12'
    },
  ];
  changeText(value) {
    this.title = value;
  }
}
