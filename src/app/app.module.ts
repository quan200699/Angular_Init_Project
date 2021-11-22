import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ //Để khai báo các component đang được sử dụng trong module này
    AppComponent
  ],
  imports: [ //Để khai báo các module đang muốn sử dụng
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [], //export module cho module khác sử dụng
  providers: [],
  bootstrap: [AppComponent] //định nghĩa component root mà mình muốn sử dụng
})
export class AppModule {
}
