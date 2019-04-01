import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Order } from './order';
import { OrderService } from '../services/orderService';

@Component({
    selector: "order-list",
    templateUrl: "orderList.component.html",
    styleUrls: [],
})
export class OrderList implements OnInit {

    private title: string = "Orders";
    public orders: Order[] = [];
    private token;
    private tokenExpiration;

    constructor(private orderService: OrderService, private router: Router) {
        var t = localStorage.getItem('token');
        this.token = JSON.parse(t);
        var te = localStorage.getItem('tokenExpiration');
        this.tokenExpiration = JSON.parse(te);

        if (this.token == null || this.tokenExpiration == null) {
            this.router.navigate(["Login"]);
        }
    }

    ngOnInit() {
        this.orderService.getOrders()
            .subscribe(success => {
                if (success) {
                    this.orders = this.orderService.orders;
                }
            });
    }
}
