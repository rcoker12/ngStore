import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Order } from './order';
import { OrderService } from '../services/orderService';

@Component({
    selector: "order",
    templateUrl: "orderForm.component.html",
    styleUrls: [],
})
export class OrderForm implements OnInit {

    private title: string;
    private errorMessage: string = "";
    private orderId: string;
    public order: Order = new Order();

    constructor(private orderService: OrderService, private router: Router) {
        this.title = "Order";
        this.orderId = localStorage.getItem("orderId");
    }

    ngOnInit() {
        if (this.orderId != "0") {
            this.orderService.getOrder(this.orderId)
                .subscribe(success => {
                    if (success) {
                        this.order = this.orderService.order;
                    }
                });
        }
    }

    onSubmit() {
        console.log(this.order);
        this.orderService.saveOrder(this.order)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["Order/Orders"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }
}
