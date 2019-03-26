import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { Product } from '../product/product';
import { OrderItem } from '../order/orderItem';

@Injectable()
export class OrderService {

    public order: Order = new Order();

    constructor() {
    }

    addToOrder(product: Product, quantity: number) {
        var item: OrderItem = new OrderItem();
        item.product = product;
        item.unitPrice = product.unitPrice;
        item.quantity = quantity;
        this.order.orderItems.push(item);
        localStorage.setItem('order', JSON.stringify(this.order));
    }
}
