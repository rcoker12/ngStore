import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { Order } from '../order/order';
import { Product } from '../product/product';
import { OrderItem } from '../order/orderItem';

@Injectable()
export class OrderService {

    private token: string = "";
    public order: Order;
    public orders: Order[] = [];

    constructor(private http: HttpClient) {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        if (this.order === null) {
            this.order = new Order();
        }
        var t = localStorage.getItem('token');
        this.token = JSON.parse(t);
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
        return this.http.get("/api/order/" + orderId, {
                headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
            })
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

    getNextOrder(): Observable<boolean> {
        return this.http.get("/api/orders/getNextOrder")
            .pipe(
            map((data: string) => {
                    this.order.orderNumber = data;
                    return true;
                }));
    }

    saveOrder(order): Observable<boolean> {
        order.customerId = order.customer.id;
        return this.http.post("/api/order", order)
            .pipe(
                map((response: Order) => {
                    this.order = response;
                    return true;
                }));
    }

    deleteOrder(order): Observable<boolean> {
        return this.http.post("/api/order/delete", order)
            .pipe(
                map((response: Order) => {
                    this.order = response;
                    return true;
                }));
    }

    deleteItem(order): Observable<boolean> {
        return this.http.post("/api/order/deleteItem", order)
            .pipe(
                map((response: Order) => {
                    this.order = response;
                    return true;
                }));
    }
}
