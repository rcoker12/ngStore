import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductList } from "./product/productList.component";

@NgModule({
  declarations: [
      AppComponent,
      ProductList
  ],
  imports: [
    BrowserModule
  ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/ClientApp' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
