import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { OrderItem } from '../order/orderItem';
var OrderService = /** @class */ (function () {
    function OrderService() {
        this.order = new Order();
        console.log("Creating order service");
    }
    OrderService.prototype.addToOrder = function (product, quantity) {
        var item = new OrderItem();
        item.product = product;
        item.unitPrice = product.unitPrice;
        item.quantity = quantity;
        this.order.orderItems.push(item);
        localStorage.setItem('order', JSON.stringify(this.order));
    };
    OrderService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=orderService.js.map