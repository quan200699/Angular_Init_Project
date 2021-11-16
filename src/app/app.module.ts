import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import { ProductCreateComponent } from './product/product-create/product-create.component';

@NgModule({
  declarations: [ //Để khai báo các component đang được sử dụng trong module này
    AppComponent, ProductListComponent, ProductCreateComponent
  ],
  imports: [ //Để khai báo các module đang muốn sử dụng
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [], //export module cho module khác sử dụng
  providers: [],
  bootstrap: [AppComponent] //định nghĩa component root mà mình muốn sử dụng
})
export class AppModule { }
