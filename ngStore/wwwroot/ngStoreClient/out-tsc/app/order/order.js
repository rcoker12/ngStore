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
export { Order };
//# sourceMappingURL=order.js.map