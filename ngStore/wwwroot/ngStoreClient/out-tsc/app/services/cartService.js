import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { OrderService } from './orderService';
var CartService = /** @class */ (function () {
    function CartService(orderService) {
        this.orderService = orderService;
        this.getOrder();
    }
    CartService.prototype.getOrder = function () {
        var _this = this;
        this.orderService.subject.subscribe(function (o) { return _this.order = o; });
    };
    CartService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [OrderService])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cartService.js.map