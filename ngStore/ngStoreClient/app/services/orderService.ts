import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { Product } from '../product/product';
import { OrderItem } from '../order/orderItem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class OrderService {

    private order: Order;
    public subject: BehaviorSubject<Order>;

    constructor() {
        if (this.order === undefined) {
            this.order = new Order();
            this.subject = new BehaviorSubject(this.order);
            this.subject.asObservable();
            console.log("new order: " + this.order)
        }
    }

    public getOrder(): Order {
        return this.order;
    }

    addToOrder(product: Product, quantity: number) {
        var item: OrderItem = new OrderItem();
        item.product = product;
        item.order = this.order;
        item.unitPrice = product.unitPrice;
        item.quantity = quantity;
        this.order.orderItems.push(item);
        this.subject.next(this.order);
        console.log(this.order);
    }
}
