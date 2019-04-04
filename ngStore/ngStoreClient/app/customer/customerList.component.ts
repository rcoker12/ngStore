import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Customer } from './customer';
import { CustomerService } from '../services/customerService';

@Component({
    selector: "customer-list",
    templateUrl: "customerList.component.html",
    styleUrls: [],
})
export class CustomerList implements OnInit {

    private title: string;
    public customers: Customer[] = [];

    constructor(private customerService: CustomerService, private router: Router) {
        this.title = "Customers";
    }

    ngOnInit() {
        this.customerService.getCustomers()
            .subscribe(success => {
                if (success) {
                    this.customers = this.customerService.customers;
                }
            });

    }

    addCustomer() {
        localStorage.setItem('customerId', "0");
        this.router.navigate(["Customer/0"]);
    }

    editCustomer(customer: Customer) {
        localStorage.setItem('customerId', JSON.stringify(customer.id));
        this.router.navigate(["Customer/" + customer.id]);
    }
}
