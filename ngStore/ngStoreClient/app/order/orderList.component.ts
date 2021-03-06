﻿import { Component, OnInit } from "@angular/core";
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
    private errorMessage: string = "";
    private token;
    private tokenExpiration;
    public orders: Order[] = [];

    constructor(private orderService: OrderService, private router: Router) {
    }

    ngOnInit() {
        var t = localStorage.getItem('token');
        this.token = JSON.parse(t);
        var te = localStorage.getItem('tokenExpiration');
        this.tokenExpiration = JSON.parse(te);

        this.orderService.getOrders()
            .subscribe(success => {
                if (success) {
                    this.orders = this.orderService.orders;
                }
            });
    }

    addOrder() {
        localStorage.setItem('orderId', "0");
        this.router.navigate(["Order/0"]);
    }

    editOrder(order: Order) {
        localStorage.setItem('orderId', JSON.stringify(order.id));
        this.router.navigate(["Order/" + order.id]);
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
