import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { Product } from '../product/product';
import { OrderItem } from '../order/orderItem';

@Injectable()
export class OrderService {

    public order: Order;

    constructor() {
        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        if (this.order === null) {
            this.order = new Order();
        }
        console.log(this.order);
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
}
