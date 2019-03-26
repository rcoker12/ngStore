import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from '../services/loginService';
import { OrderService } from '../services/orderService';
var Login = /** @class */ (function () {
    function Login(loginService, orderService, router) {
        this.loginService = loginService;
        this.orderService = orderService;
        this.router = router;
        this.errorMessage = "";
        this.credentials = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
        this.loginService.login(this.credentials);
        //.subscribe(success => {
        //    if (success) {
        //        if (this.orderService.order.orderItems.length == 0) {
        //            this.router.navigate([""]);
        //        } else {
        //            this.router.navigate(["checkout"]);
        //        }
        //    }
        //}, err => this.errorMessage = "Failed to login");
    };
    Login = tslib_1.__decorate([
        Component({
            selector: "login",
            templateUrl: "login.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, OrderService, Router])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.component.js.map