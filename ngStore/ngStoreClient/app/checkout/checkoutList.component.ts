import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Order } from '../order/order';
import { CartService } from '../services/cartService';

@Component({
    selector: "checkout-list",
    templateUrl: "checkoutList.component.html",
    styleUrls: []
})
export class CheckoutList implements OnInit {

    private title: string = "Checkout";
    public order: Order;
    errorMessage: string = "";

    constructor(private cartService: CartService, private router: Router) {
    }

    ngOnInit() {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        this.getSubtotal();
    }

    //  After creating order from JSON, functions on Order cannot be found, so we have to do it here
    getSubtotal() {
        var sum = 0;
        for (var i = 0; i < this.order.orderItems.length; i++) {
            sum += this.order.orderItems[i].unitPrice * this.order.orderItems[i].quantity;
        }
        this.order.subTotal = sum;
    };

    onCheckout() {
        this.cartService.checkout()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/Product"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }
}
