import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ProductService } from '../services/productService';
import { OrderService } from '../services/orderService';
var ProductList = /** @class */ (function () {
    //public order: Order = new Order();
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
        console.log(product);
        this.orderService.addToOrder(product, quantity);
    };
    ProductList = tslib_1.__decorate([
        Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: [],
        }),
        tslib_1.__metadata("design:paramtypes", [ProductService, OrderService])
    ], ProductList);
    return ProductList;
}());
export { ProductList };
//# sourceMappingURL=productList.component.js.map