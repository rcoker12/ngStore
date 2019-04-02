import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { Supplier } from '../supplier/supplier';

@Injectable()
export class SupplierService {

    public suppliers: Supplier[] = [];

    constructor(private http: HttpClient) {

    }

    getSuppliers(): Observable<boolean> {
        return this.http.get("/api/suppliers")
            .pipe(
                map((data: Supplier[]) => {
                    this.suppliers = data;
                    return true;
                }));
    }
}
