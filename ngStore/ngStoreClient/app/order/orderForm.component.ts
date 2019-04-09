import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Order } from './order';
import { OrderService } from '../services/orderService';
import { Customer } from '../customer/customer';
import { CustomerService } from '../services/customerService';

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
    private customers: Customer[] = [];

    constructor(private orderService: OrderService, private router: Router, private customerService: CustomerService) {
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
        } else {
            this.order.customer = new Customer();
        }

        this.customerService.getCustomers()
            .subscribe(success => {
                if (success) {
                    this.customers = this.customerService.customers;
                }
            });
    }

    onCustomerChange(event): void {
        console.log(event.target.value);
        this.customerService.getCustomer(event.target.value)
            .subscribe(success => {
                if (success) {
                    this.order.customer = this.customerService.customer;
                }
            });
    }

    onSubmit() {
        this.orderService.saveOrder(this.order)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["Order/Orders"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }
}
