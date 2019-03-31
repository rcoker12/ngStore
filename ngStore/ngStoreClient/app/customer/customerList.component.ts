import { Component, OnInit } from "@angular/core";

import { Customer } from './customer';
import { CustomerService } from '../services/customerService';

@Component({
    selector: "customer-list",
    templateUrl: "customerList.component.html",
    styleUrls: [],
})
export class CustomerList implements OnInit {

    public customers: Customer[] = [];

    constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
        this.customerService.getCustomers()
            .subscribe(success => {
                if (success) {
                    this.customers = this.customerService.customers;
                }
            });

    }
}
