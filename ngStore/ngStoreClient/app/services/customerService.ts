import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { Customer } from '../customer/customer';

@Injectable()
export class CustomerService {

    public customers: Customer[] = [];

    constructor(private http: HttpClient) {

    }

    getCustomers(): Observable<boolean> {
        return this.http.get("/api/customers")
            .pipe(
                map((data: any[]) => {
                    this.customers = data;
                    return true;
                }));
    }
}
