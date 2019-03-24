import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../services/loginService";
import { CartService } from "../services/cartService";
import { Order } from '../order/order';

@Component({
    selector: "cart-list",
    templateUrl: "cartList.component.html",
    styleUrls: []
})
export class CartList {

    public order: Order = new Order();

    constructor(public loginService: LoginService, public cartService: CartService, private router: Router) {
        this.order = cartService.order;
        console.log(this.order);
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
