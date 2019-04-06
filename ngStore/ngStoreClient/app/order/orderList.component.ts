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

    constructor(private orderService: OrderService, private router: Router) {
    }

    ngOnInit() {
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
}
