import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductRoot } from "./product/product.component";
import { CartRoot } from "./cart/cart.component";
import { ProductList } from "./product/productList.component";
import { CartList } from "./cart/cartList.component";
import { ProductService } from "./services/productService";
import { OrderService } from "./services/orderService";
import { LoginService } from "./services/loginService";
import { CartService } from "./services/cartService";
import { YesNoBooleanPipe } from './shared/yesno.pipe';

let routes = [
    { path: "Product", component: ProductRoot },
    { path: "Cart", component: CartRoot }
];

@NgModule({
    declarations: [
        AppComponent,
        ProductRoot,
        CartRoot,
        ProductList,
        CartList,
        YesNoBooleanPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        YesNoBooleanPipe
    ],  
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ProductService,
        OrderService,
        LoginService,
        CartService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
