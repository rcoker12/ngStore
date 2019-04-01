import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../services/loginService";
import { Order } from '../order/order';

@Component({
    selector: "cart-list",
    templateUrl: "cartList.component.html",
    styleUrls: []
})
export class CartList implements OnInit {

    private title: string = "Cart";
        public order: Order;
    private token;
    private tokenExpiration;

    constructor(private loginService: LoginService, private router: Router) {
    }

    ngOnInit() {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        var t = localStorage.getItem('token');
        this.token = JSON.parse(t);
        var te = localStorage.getItem('tokenExpiration');
        this.tokenExpiration = JSON.parse(te);
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

    public get loginRequired(): boolean {
        if (this.token == null || this.tokenExpiration == null) {
            return true;
        } else {
            return this.token.length == 0 || this.tokenExpiration < new Date();
        }
    }

    onCheckout() {
        if (this.loginRequired) {
            // Force Login
            this.router.navigate(["Login"]);
        } else {
            // Go to checkout
            this.router.navigate(["Checkout"]);
        }
    }
}
