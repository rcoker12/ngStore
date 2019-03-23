import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { Product } from "./product/product.component";
import { ProductList } from "./product/productList.component";
import { ProductService } from "./services/productService";
import { OrderService } from "./services/orderService";
import { YesNoBooleanPipe } from './shared/yesno.pipe';
var routes = [
    { path: "product", component: Product }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                Product,
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map