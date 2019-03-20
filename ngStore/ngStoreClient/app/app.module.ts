import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductList } from "./product/productList.component";
import { ProductService } from "./services/productService";

@NgModule({
  declarations: [
      AppComponent,
      ProductList
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/ngStoreClient' },
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
