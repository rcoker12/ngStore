import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../services/loginService";
import { OrderService } from '../services/orderService';
import { Order } from '../order/order';

@Component({
    selector: "cart-list",
    templateUrl: "cartList.component.html",
    styleUrls: []
})
export class CartList implements OnInit {

    public order: Order;

    constructor(private loginService: LoginService, private orderService: OrderService, private router: Router) {
    }

    ngOnInit() {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
    }

    onCheckout() {
        if (this.loginService.loginRequired) {
            // Force Login
            this.router.navigate(["Login"]);
        } else {
            // Go to checkout
            this.router.navigate(["Checkout"]);
        }
    }
}
