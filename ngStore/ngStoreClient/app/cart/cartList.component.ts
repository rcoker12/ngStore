import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../services/loginService";
import { OrderService } from '../services/orderService';

@Component({
    selector: "cart-list",
    templateUrl: "cartList.component.html",
    styleUrls: []
})
export class CartList implements OnInit {

    constructor(private loginService: LoginService, private orderService: OrderService, private router: Router) {
    }

    ngOnInit() {
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
