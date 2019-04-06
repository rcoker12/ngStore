import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { Product } from '../product/product';

@Injectable()
export class ProductService {

    public product: Product;
    public products: Product[] = [];

    constructor(private http: HttpClient) {

    }

    getProduct(productId: string): Observable<boolean> {
        return this.http.get("/api/product/" + productId)
            .pipe(
                map((data: Product) => {
                    this.product = data;
                    return true;
                }));
    }

    getProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .pipe(
                map((data: Product[]) => {
                    this.products = data;
                    return true;
                }));
    }

    saveProduct(product): Observable<boolean> {
        return this.http.post("/api/product", product)
            .pipe(
                map((response: Product) => {
                    this.product = response;
                    return true;
                }));
    }

    deleteProduct(product): Observable<boolean> {
        return this.http.post("/api/product/delete", product)
            .pipe(
                map((response: Product) => {
                    this.product = response;
                    return true;
                }));
    }
}
