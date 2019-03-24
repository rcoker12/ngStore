import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
var CartService = /** @class */ (function () {
    function CartService() {
    }
    CartService.prototype.addToCart = function (order, orderItem) {
        this.order = order;
        this.order.orderItems.push(orderItem);
    };
    CartService = tslib_1.__decorate([
        Injectable()
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cartService.js.map