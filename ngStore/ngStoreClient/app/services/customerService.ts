import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { Customer } from '../customer/customer';

@Injectable()
export class CustomerService {

    public customer: Customer;
    public customers: Customer[] = [];

    constructor(private http: HttpClient) {

    }

    getCustomer(customerId: string): Observable<boolean> {
        return this.http.get("/api/customer/" + customerId)
            .pipe(
                map((data: Customer) => {
                    this.customer = data;
                    return true;
                }));
    }

    getCustomers(): Observable<boolean> {
        return this.http.get("/api/customers")
            .pipe(
                map((data: Customer[]) => {
                    this.customers = data;
                    return true;
                }));
    }

    saveCustomer(customer): Observable<boolean> {
        return this.http.post("/api/customer", customer)
            .pipe(
                map((response: Customer) => {
                    this.customer = response;
                    return true;
                }));
    }

    deleteCustomer(customer): Observable<boolean> {
        return this.http.post("/api/customer/delete", customer)
            .pipe(
                map((response: Customer) => {
                    this.customer = response;
                    return true;
                }));
    }

    deleteOrder(customer): Observable<boolean> {
        console.log(customer);
        return this.http.post("/api/customer/deleteOrder", customer)
            .pipe(
                map((response: Customer) => {
                    this.customer = response;
                    return true;
                }));
    }
}
