import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from './user';
import { UserService } from '../services/userService';
import { Order } from '../order/order';
import { OrderService } from '../services/orderService';

@Component({
    selector: "user",
    templateUrl: "userForm.component.html",
    styleUrls: [],
})
export class UserForm implements OnInit {

    private title: string;
    private errorMessage: string = "";
    private userId: string;
    public user: User = new User();
    public orders: Order[] = [];

    constructor(private userService: UserService, private orderService: OrderService, private router: Router) {
        this.title = "User";
        this.userId = localStorage.getItem("userId");
    }

    ngOnInit() {
        if (this.userId != "0") {
            this.userService.getUser(this.userId)
                .subscribe(success => {
                    if (success) {
                        this.user = this.userService.user;
                        console.log(this.user);
                    }
                }, err => this.errorMessage = "Failed to get user");
        }
    }

    onSubmit() {
        this.userService.saveUser(this.user)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["User/Users"]);
                }
            }, err => this.errorMessage = "Failed to save user");
    }

    deleteOrder(order: Order) {
        this.orderService.deleteOrder(order)
            .subscribe(success => {
                if (success) {
                    this.orders.forEach((o, index) => {
                        if (o === order) this.orders.splice(index, 1);
                    });
                }
            }, err => this.errorMessage = "Failed to delete order");
    }
}
