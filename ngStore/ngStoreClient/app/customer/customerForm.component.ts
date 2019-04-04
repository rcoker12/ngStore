import { Component, OnInit } from "@angular/core";

import { Customer } from './customer';
import { CustomerService } from '../services/customerService';

@Component({
    selector: "customer",
    templateUrl: "customerForm.component.html",
    styleUrls: [],
})
export class CustomerForm implements OnInit {

    private title: string;
    private customerId: string;
    public customer: Customer = new Customer();

    constructor(private customerService: CustomerService) {
        this.title = "Customer";
        this.customerId = localStorage.getItem("customerId");
    }

    ngOnInit() {
        if (this.customerId != "0") {
            this.customerService.getCustomer(this.customerId)
                .subscribe(success => {
                    if (success) {
                        this.customer = this.customerService.customer;
                        console.log(this.customer);
                    }
                });
        }
    }
}
