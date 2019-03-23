import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { Product } from '../product/product';
import { OrderItem } from '../order/orderItem';

@Injectable()
export class OrderService {

    public order: Order = new Order();

    addToOrder(product: Product, quantity: number) {

        var item: OrderItem = new OrderItem();
        item.product = product;
        item.order = this.order;
        item.unitPrice = product.unitPrice;
        item.quantity = quantity;
        this.order.orderItems.push(item);
    }
}
