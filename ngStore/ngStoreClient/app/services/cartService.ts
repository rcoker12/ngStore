import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { OrderItem } from '../order/orderItem';

@Injectable()
export class CartService {

    public order: Order = new Order();

    addToCart(order: Order, orderItem: OrderItem) {
        this.order = order;
        this.order.orderItems.push(orderItem);
        console.log(this.order);
    }
}
