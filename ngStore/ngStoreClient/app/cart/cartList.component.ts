import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../services/loginService";
import { OrderService } from "../services/orderService";
import { Order } from '../order/order';

@Component({
    selector: "cart-list",
    templateUrl: "cartList.component.html",
    styleUrls: []
})
export class CartList {

    public order: Order;

    constructor(public loginService: LoginService, public orderService: OrderService, private router: Router) {
        this.order = orderService.order;
        console.log(orderService.order);
    }

    onCheckout() {
        if (this.loginService.loginRequired) {
            // Force Login
            this.router.navigate(["login"]);
        } else {
            // Go to checkout
            this.router.navigate(["checkout"]);
        }
    }
}
