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

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-store',
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./ngStoreClient/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./ngStoreClient/app/product/product.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./ngStoreClient/app/cart/cart.component.ts");
/* harmony import */ var _product_productList_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/productList.component */ "./ngStoreClient/app/product/productList.component.ts");
/* harmony import */ var _cart_cartList_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cartList.component */ "./ngStoreClient/app/cart/cartList.component.ts");
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/productService */ "./ngStoreClient/app/services/productService.ts");
/* harmony import */ var _services_orderService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/orderService */ "./ngStoreClient/app/services/orderService.ts");
/* harmony import */ var _services_loginService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/loginService */ "./ngStoreClient/app/services/loginService.ts");
/* harmony import */ var _shared_yesno_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/yesno.pipe */ "./ngStoreClient/app/shared/yesno.pipe.ts");















var routes = [
    { path: "Product", component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductRoot"] },
    { path: "Cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartRoot"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductRoot"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartRoot"],
                _product_productList_component__WEBPACK_IMPORTED_MODULE_9__["ProductList"],
                _cart_cartList_component__WEBPACK_IMPORTED_MODULE_10__["CartList"],
                _shared_yesno_pipe__WEBPACK_IMPORTED_MODULE_14__["YesNoBooleanPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _shared_yesno_pipe__WEBPACK_IMPORTED_MODULE_14__["YesNoBooleanPipe"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' },
                _services_productService__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
                _services_orderService__WEBPACK_IMPORTED_MODULE_12__["OrderService"],
                _services_loginService__WEBPACK_IMPORTED_MODULE_13__["LoginService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ngStoreClient/app/cart/cart.component.html":
/*!****************************************************!*\
  !*** ./ngStoreClient/app/cart/cart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n    </div>\r\n</div>\r\n\r\n<cart-list></cart-list>\r\n"

/***/ }),

/***/ "./ngStoreClient/app/cart/cart.component.ts":
/*!**************************************************!*\
  !*** ./ngStoreClient/app/cart/cart.component.ts ***!
  \**************************************************/
/*! exports provided: CartRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoot", function() { return CartRoot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartRoot = /** @class */ (function () {
    function CartRoot() {
        this.title = "Cart";
    }
    CartRoot = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "cart-root",
            template: __webpack_require__(/*! ./cart.component.html */ "./ngStoreClient/app/cart/cart.component.html")
        })
    ], CartRoot);
    return CartRoot;
}());



/***/ }),

/***/ "./ngStoreClient/app/cart/cartList.component.html":
/*!********************************************************!*\
  !*** ./ngStoreClient/app/cart/cartList.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"orderService.order.orderItems.length > 0\">\r\n    <div>#/Items: {{ orderService.order.orderItems.length }}</div>\r\n    <div>Subtotal: {{ orderService.order.subtotal | currency:\"USD\":\"symbol\" }}</div>\r\n    <table class=\"table table-condensed table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <td>Product</td>\r\n                <td>Package</td>\r\n                <td>#</td>\r\n                <td>$</td>\r\n                <td>Total</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let o of orderService.order.orderItems\">\r\n                <td>{{ o.product.productName }}</td>\r\n                <td>{{ o.product.package }}</td>\r\n                <td>{{ o.quantity }}</td>\r\n                <td>{{ o.unitPrice | currency:\"USD\":\"symbol\" }}</td>\r\n                <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":\"symbol\" }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Checkout</button>\r\n</div>\r\n<div *ngIf=\"orderService.order.orderItems.length == 0\">\r\n    <div>You cart is empty</div>\r\n</div>\r\n"

/***/ }),

/***/ "./ngStoreClient/app/cart/cartList.component.ts":
/*!******************************************************!*\
  !*** ./ngStoreClient/app/cart/cartList.component.ts ***!
  \******************************************************/
/*! exports provided: CartList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartList", function() { return CartList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loginService */ "./ngStoreClient/app/services/loginService.ts");
/* harmony import */ var _services_orderService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/orderService */ "./ngStoreClient/app/services/orderService.ts");





var CartList = /** @class */ (function () {
    function CartList(loginService, orderService, router) {
        this.loginService = loginService;
        this.orderService = orderService;
        this.router = router;
        this.order = orderService.order;
        console.log(orderService.order);
    }
    CartList.prototype.onCheckout = function () {
        if (this.loginService.loginRequired) {
            // Force Login
            this.router.navigate(["login"]);
        }
        else {
            // Go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    CartList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "cart-list",
            template: __webpack_require__(/*! ./cartList.component.html */ "./ngStoreClient/app/cart/cartList.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_orderService__WEBPACK_IMPORTED_MODULE_4__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CartList);
    return CartList;
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
        this.orderDate = new Date();
        this.orderItems = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            var sum = 0;
            for (var i = 0; i < this.orderItems.length; i++) {
                sum += this.orderItems[i].unitPrice * this.orderItems[i].quantity;
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    ;
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

/***/ "./ngStoreClient/app/product/product.component.html":
/*!**********************************************************!*\
  !*** ./ngStoreClient/app/product/product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n    </div>\r\n</div>\r\n<product-list></product-list>\r\n"

/***/ }),

/***/ "./ngStoreClient/app/product/product.component.ts":
/*!********************************************************!*\
  !*** ./ngStoreClient/app/product/product.component.ts ***!
  \********************************************************/
/*! exports provided: ProductRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoot", function() { return ProductRoot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductRoot = /** @class */ (function () {
    function ProductRoot() {
        this.title = "Products";
    }
    ProductRoot = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-root",
            template: __webpack_require__(/*! ./product.component.html */ "./ngStoreClient/app/product/product.component.html")
        })
    ], ProductRoot);
    return ProductRoot;
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

/***/ "./ngStoreClient/app/services/loginService.ts":
/*!****************************************************!*\
  !*** ./ngStoreClient/app/services/loginService.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.token = "";
        this.tokenExpiration = new Date();
    }
    Object.defineProperty(LoginService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration < new Date();
        },
        enumerable: true,
        configurable: true
    });
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoginService);
    return LoginService;
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