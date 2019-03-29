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
    }

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
