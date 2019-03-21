import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ProductList } from "./product/productList.component";
import { ProductService } from "./services/productService";
import { YesNoBooleanPipe } from './shared/yesno.pipe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                ProductService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map