﻿import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { Product } from '../product/product';

@Injectable()
export class ProductService {

    public products: Product[] = [];

    constructor(private http: HttpClient) {

    }

    getProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .pipe(
                map((data: any[]) => {
                    this.products = data;
                    return true;
                }));
    }
}
