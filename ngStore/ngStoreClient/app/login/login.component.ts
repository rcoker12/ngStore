import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from '../services/loginService';
import { Order } from '../order/order';

@Component({
    selector: "login-root",
    templateUrl: "login.component.html"
})
export class Login implements OnInit {
    constructor(private loginService: LoginService, private router: Router) { }

    public order: Order;
    title: string;
    errorMessage: string = "";
    public creds = {
        username: "",
        password: ""
    };

    ngOnInit() {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        this.title = "Login";
    }

    onLogin() {
        this.loginService.login(this.creds)
            .subscribe(success => {
                if (success) {
                    if (this.order.orderItems.length == 0) {
                        this.router.navigate(["Orders/Order"]);
                    } else {
                        this.router.navigate(["Checkout"]);
                    }
                }
            }, err => this.errorMessage = "Failed to login");
    }
}
