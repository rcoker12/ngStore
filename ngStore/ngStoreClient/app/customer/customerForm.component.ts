import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Customer } from './customer';
import { CustomerService } from '../services/customerService';
import { Order } from '../order/order';

@Component({
    selector: "customer",
    templateUrl: "customerForm.component.html",
    styleUrls: [],
})
export class CustomerForm implements OnInit {

    private title: string;
    private errorMessage: string = "";
    private customerId: string;
    public customer: Customer = new Customer();

    constructor(private customerService: CustomerService, private router: Router) {
        this.title = "Customer";
        this.customerId = localStorage.getItem("customerId");
    }

    ngOnInit() {
        if (this.customerId != "0") {
            this.customerService.getCustomer(this.customerId)
                .subscribe(success => {
                    if (success) {
                        this.customer = this.customerService.customer;
                    }
                });
        }
    }

    onSubmit() {
        this.customerService.saveCustomer(this.customer)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["Customer/Customers"]);
                }
            }, err => this.errorMessage = "Failed to save customer");
    }

    deleteOrder(customer: Customer, order: Order) {
        customer.order = order;
        this.customerService.deleteOrder(customer)
            .subscribe(success => {
                if (success) {
                    this.customer.orders.forEach((o, index) => {
                        if (o === order) this.customer.orders.splice(index, 1);
                    });
                }
            }, err => this.errorMessage = "Failed to delete customer order");
    }
}
