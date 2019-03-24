import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { OrderItem } from '../order/orderItem';
import { CartService } from "./cartService";
var OrderService = /** @class */ (function () {
    function OrderService(cartService) {
        this.cartService = cartService;
        this.order = new Order();
    }
    OrderService.prototype.addToOrder = function (product, quantity) {
        var item = new OrderItem();
        item.product = product;
        item.order = this.order;
        item.unitPrice = product.unitPrice;
        item.quantity = quantity;
        this.order.orderItems.push(item);
        this.cartService.addToCart(this.order, item);
    };
    OrderService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [CartService])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=orderService.js.map