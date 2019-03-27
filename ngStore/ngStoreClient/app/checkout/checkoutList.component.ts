import { Component, OnInit } from "@angular/core";
import { Order } from '../order/order';

@Component({
    selector: "checkout-list",
    templateUrl: "checkoutList.component.html",
    styleUrls: []
})
export class CheckoutList implements OnInit {

    public order: Order;

    constructor() {
    }

    ngOnInit() {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        this.getSubtotal();
        console.log(this.order);
    }

    //  After creating order from JSON, functions on Order cannot be found, so we have to do it here
    getSubtotal() {
        var sum = 0;
        for (var i = 0; i < this.order.orderItems.length; i++) {
            sum += this.order.orderItems[i].unitPrice * this.order.orderItems[i].quantity;
        }
        this.order.subTotal = sum;
    };
}
