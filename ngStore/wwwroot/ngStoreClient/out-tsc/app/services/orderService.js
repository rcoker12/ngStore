import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { OrderItem } from '../order/orderItem';
import { BehaviorSubject } from 'rxjs';
var OrderService = /** @class */ (function () {
    function OrderService() {
        if (this.order === undefined) {
            this.order = new Order();
            this.subject = new BehaviorSubject(this.order);
            this.subject.asObservable();
            console.log("new order: " + this.order);
        }
    }
    OrderService.prototype.getOrder = function () {
        return this.order;
    };
    OrderService.prototype.addToOrder = function (product, quantity) {
        var item = new OrderItem();
        item.product = product;
        item.order = this.order;
        item.unitPrice = product.unitPrice;
        item.quantity = quantity;
        this.order.orderItems.push(item);
        this.subject.next(this.order);
        console.log(this.order);
    };
    OrderService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=orderService.js.map