import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/loginService";
import { CartService } from "../services/cartService";
import { Order } from '../order/order';
var CartList = /** @class */ (function () {
    function CartList(loginService, cartService, router) {
        this.loginService = loginService;
        this.cartService = cartService;
        this.router = router;
        this.order = new Order();
    }
    CartList.prototype.onCheckout = function () {
        if (this.loginService.loginRequired) {
            // Force Login
            this.router.navigate(["login"]);
        }
        else {
            // Go to checkout
            this.router.navigate(["checkout"]);
        }
    };
    CartList = tslib_1.__decorate([
        Component({
            selector: "cart-list",
            templateUrl: "cartList.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, CartService, Router])
    ], CartList);
    return CartList;
}());
export { CartList };
//# sourceMappingURL=cartList.component.js.map