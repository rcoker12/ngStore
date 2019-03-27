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
        console.log(this.order);
    }
}
