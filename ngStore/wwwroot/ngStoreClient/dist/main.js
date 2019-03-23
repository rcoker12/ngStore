(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ngStoreClient/$$_lazy_route_resource lazy recursive":
/*!********************************************************************!*\
  !*** ./ngStoreClient/$$_lazy_route_resource lazy namespace object ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ngStoreClient/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ngStoreClient/app/app.component.html":
/*!**********************************************!*\
  !*** ./ngStoreClient/app/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ngStoreClient/app/app.component.ts":
/*!********************************************!*\
  !*** ./ngStoreClient/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Products';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngStore-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ngStoreClient/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ngStoreClient/app/app.module.ts":
/*!*****************************************!*\
  !*** ./ngStoreClient/app/app.module.ts ***!
  \*****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./ngStoreClient/app/app.component.ts");
/* harmony import */ var _product_productList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/productList.component */ "./ngStoreClient/app/product/productList.component.ts");
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/productService */ "./ngStoreClient/app/services/productService.ts");
/* harmony import */ var _services_orderService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/orderService */ "./ngStoreClient/app/services/orderService.ts");
/* harmony import */ var _shared_yesno_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/yesno.pipe */ "./ngStoreClient/app/shared/yesno.pipe.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _product_productList_component__WEBPACK_IMPORTED_MODULE_6__["ProductList"],
                _shared_yesno_pipe__WEBPACK_IMPORTED_MODULE_9__["YesNoBooleanPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            exports: [
                _shared_yesno_pipe__WEBPACK_IMPORTED_MODULE_9__["YesNoBooleanPipe"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/ngStoreClient' },
                _services_productService__WEBPACK_IMPORTED_MODULE_7__["ProductService"],
                _services_orderService__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ngStoreClient/app/order/order.ts":
/*!******************************************!*\
  !*** ./ngStoreClient/app/order/order.ts ***!
  \******************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
        this["orderDate"] = new Date();
        this["orderItems"] = new Array();
    }
    return Order;
}());



/***/ }),

/***/ "./ngStoreClient/app/order/orderItem.ts":
/*!**********************************************!*\
  !*** ./ngStoreClient/app/order/orderItem.ts ***!
  \**********************************************/
/*! exports provided: OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());



/***/ }),

/***/ "./ngStoreClient/app/product/productList.component.html":
/*!**************************************************************!*\
  !*** ./ngStoreClient/app/product/productList.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n            <div class=\"table-responsive-md\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\"></th>\r\n                            <th scope=\"col\">Product</th>\r\n                            <th scope=\"col\">Package</th>\r\n                            <th scope=\"col\">Supplier</th>\r\n                            <th scope=\"col\">Discontinued</th>\r\n                            <th scope=\"col\" class=\"text-center\">Quantity</th>\r\n                            <th scope=\"col\" class=\"text-right\">Price</th>\r\n                            <th scope=\"col\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let p of products\"> \r\n                            <td><img src=\"https://dummyimage.com/50x50/55595c/fff\" /> </td>\r\n                            <td>{{p.productName}}</td>\r\n                            <td>{{p.package}}</td>\r\n                            <td>{{p.supplier.companyName}}</td>\r\n                            <td>{{p.discontinued | yesnoBoolean}}</td>\r\n                            <td><input id=\"quantity\" class=\"form-control\" type=\"text\" value=\"1\" /></td>\r\n                            <td>{{p.unitPrice | currency:\"USD\":\"symbol\"}}</td>\r\n                            <td class=\"text-right\"><button class=\"btn btn-sm btn-success\" [disabled]=\"p.Discontinued\" (click)=\"addProduct(p, 1)\">Buy</button> </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        <!--</div>-->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ngStoreClient/app/product/productList.component.ts":
/*!************************************************************!*\
  !*** ./ngStoreClient/app/product/productList.component.ts ***!
  \************************************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/productService */ "./ngStoreClient/app/services/productService.ts");
/* harmony import */ var _services_orderService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/orderService */ "./ngStoreClient/app/services/orderService.ts");




var ProductList = /** @class */ (function () {
    function ProductList(productService, orderService) {
        this.productService = productService;
        this.orderService = orderService;
        this.products = [];
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.productService.products;
            }
        });
    };
    ProductList.prototype.addProduct = function (product, quantity) {
        this.orderService.addToOrder(product, quantity);
    };
    ProductList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-list",
            template: __webpack_require__(/*! ./productList.component.html */ "./ngStoreClient/app/product/productList.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_productService__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_orderService__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], ProductList);
    return ProductList;
}());



/***/ }),

/***/ "./ngStoreClient/app/services/orderService.ts":
/*!****************************************************!*\
  !*** ./ngStoreClient/app/services/orderService.ts ***!
  \****************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order/order */ "./ngStoreClient/app/order/order.ts");
/* harmony import */ var _order_orderItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order/orderItem */ "./ngStoreClient/app/order/orderItem.ts");




var OrderService = /** @class */ (function () {
    function OrderService() {
        this.order = new _order_order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
    }
    OrderService.prototype.addToOrder = function (product, quantity) {
        var item = new _order_orderItem__WEBPACK_IMPORTED_MODULE_3__["OrderItem"]();
        item.product = product;
        item.order = this.order;
        item.unitPrice = product.unitPrice;
        item.quantity = quantity;
        this.order.orderItems.push(item);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./ngStoreClient/app/services/productService.ts":
/*!******************************************************!*\
  !*** ./ngStoreClient/app/services/productService.ts ***!
  \******************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.products = [];
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.products = data;
            return true;
        }));
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./ngStoreClient/app/shared/yesno.pipe.ts":
/*!************************************************!*\
  !*** ./ngStoreClient/app/shared/yesno.pipe.ts ***!
  \************************************************/
/*! exports provided: YesNoBooleanPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesNoBooleanPipe", function() { return YesNoBooleanPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var YesNoBooleanPipe = /** @class */ (function () {
    function YesNoBooleanPipe() {
    }
    YesNoBooleanPipe.prototype.transform = function (value) {
        return value == true ? 'Yes' : 'No';
    };
    ;
    YesNoBooleanPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'yesnoBoolean' })
    ], YesNoBooleanPipe);
    return YesNoBooleanPipe;
}());



/***/ }),

/***/ "./ngStoreClient/environments/environment.ts":
/*!***************************************************!*\
  !*** ./ngStoreClient/environments/environment.ts ***!
  \***************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ngStoreClient/main.ts":
/*!*******************************!*\
  !*** ./ngStoreClient/main.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ngStoreClient/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ngStoreClient/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./ngStoreClient/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\research\ngstore\ngStore\ngStoreClient\main.ts */"./ngStoreClient/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map