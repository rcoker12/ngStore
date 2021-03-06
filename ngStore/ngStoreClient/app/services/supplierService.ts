﻿import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { Supplier } from '../supplier/supplier';
import { Product } from '../product/product';

@Injectable()
export class SupplierService {

    public supplier: Supplier;
    public suppliers: Supplier[] = [];
    public products: Product[] = [];

    constructor(private http: HttpClient) {

    }

    getSupplier(supplierId: string): Observable<boolean> {
        return this.http.get("/api/supplier/" + supplierId)
            .pipe(
                map((data: Supplier) => {
                    this.supplier = data;
                    return true;
                }));
    }

    getSuppliers(): Observable<boolean> {
        return this.http.get("/api/suppliers")
            .pipe(
                map((data: Supplier[]) => {
                    this.suppliers = data;
                    return true;
                }));
    }

    saveSupplier(supplier): Observable<boolean> {
        return this.http.post("/api/supplier", supplier)
            .pipe(
                map((response: Supplier) => {
                this.supplier = response;
                    return true;
                }));
    }

    deleteSupplier(supplier): Observable<boolean> {
        return this.http.post("/api/supplier/delete", supplier)
            .pipe(
                map((response: Supplier) => {
                    this.supplier = response;
                    return true;
                }));
    }

    deleteProduct(supplier): Observable<boolean> {
        return this.http.post("/api/supplier/deleteProduct", supplier)
            .pipe(
                map((response: Supplier) => {
                    this.supplier = response;
                    return true;
                }));
    }
}
