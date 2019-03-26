import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { OrderService } from './orderService';
var CartService = /** @class */ (function () {
    function CartService(orderService) {
        this.orderService = orderService;
        console.log("Creating cart service");
    }
    CartService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [OrderService])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cartService.js.map