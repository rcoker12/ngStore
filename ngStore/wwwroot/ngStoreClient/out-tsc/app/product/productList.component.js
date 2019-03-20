import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ProductService } from '../services/productService';
var ProductList = /** @class */ (function () {
    function ProductList(dataService) {
        this.dataService = dataService;
        this.products = [];
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.dataService.products;
            }
        });
    };
    ProductList = tslib_1.__decorate([
        Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [ProductService])
    ], ProductList);
    return ProductList;
}());
export { ProductList };
//# sourceMappingURL=productList.component.js.map