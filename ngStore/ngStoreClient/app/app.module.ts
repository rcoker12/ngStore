import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductList } from "./product/productList.component";
import { ProductService } from "./services/productService";
import { OrderService } from "./services/orderService";

import { YesNoBooleanPipe } from './shared/yesno.pipe';

@NgModule({
  declarations: [
      AppComponent,
      ProductList,
      YesNoBooleanPipe
  ],
  imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        YesNoBooleanPipe
    ],  
    providers: [
        { provide: APP_BASE_HREF, useValue: '/ngStoreClient' },
        ProductService,
        OrderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
