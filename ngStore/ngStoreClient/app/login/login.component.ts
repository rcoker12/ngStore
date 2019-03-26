import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from '../services/loginService';
import { OrderService } from '../services/orderService';

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class Login {
    constructor(private loginService: LoginService, private orderService: OrderService, private router: Router) { }

    errorMessage: string = "";
    public credentials = {
        username: "",
        password: ""
    };

    onLogin() {
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
    }
}
