import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/loginService";
import { OrderService } from '../services/orderService';
var CartList = /** @class */ (function () {
    function CartList(loginService, orderService, router) {
        this.loginService = loginService;
        this.orderService = orderService;
        this.router = router;
    }
    CartList.prototype.ngOnInit = function () {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
    };
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
        tslib_1.__metadata("design:paramtypes", [LoginService, OrderService, Router])
    ], CartList);
    return CartList;
}());
export { CartList };
//# sourceMappingURL=cartList.component.js.map