import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../services/loginService";
import { OrderService } from "../services/orderService";

@Component({
    selector: "cart-list",
    templateUrl: "cartList.component.html",
    styleUrls: []
})
export class CartList {

    constructor(public loginService: LoginService, public orderService: OrderService, private router: Router) { }

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
