import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { Order } from '../order/order';
import { Product } from '../product/product';
import { OrderItem } from '../order/orderItem';

@Injectable()
export class OrderService {

    public order: Order;
    public orders: Order[] = [];

    constructor(private http: HttpClient) {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        if (this.order === null) {
            this.order = new Order();
        }
    }

    addToOrder(product: Product, quantity: number) {
        let item: OrderItem = this.order.orderItems.find(i => i.product.id == product.id);

        if (item) {

            item.quantity++;

        } else {
            item = new OrderItem();
            item.product = product;
            item.unitPrice = product.unitPrice;
            item.quantity = quantity;
            this.order.orderItems.push(item);
        }
        localStorage.setItem('order', JSON.stringify(this.order));
    }

    getOrder(orderId: string): Observable<boolean> {
        return this.http.get("/api/order/" + orderId)
            .pipe(
                map((data: Order) => {
                    this.order = data;
                    return true;
                }));
    }

    getOrders(): Observable<boolean> {
        return this.http.get("/api/orders")
            .pipe(
                map((data: Order[]) => {
                    this.orders = data;
                    return true;
                }));
    }
}
