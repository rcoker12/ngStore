import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductRoot } from "./product/product.component";
import { ProductList } from "./product/productList.component";
import { ProductService } from "./services/productService";
import { OrderService } from "./services/orderService";
import { YesNoBooleanPipe } from './shared/yesno.pipe';

let routes = [
    { path: "product", component: ProductRoot }
];

@NgModule({
    declarations: [
        AppComponent,
        ProductRoot,
        ProductList,
        YesNoBooleanPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false // for Debugging of the Routes
        })
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
