import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { OrderService } from './orderService';

@Injectable()
export class CartService {

    public order: Order;

    constructor(public orderService: OrderService) {
        this.getOrder();
    }

    getOrder() {
        this.orderService.subject.subscribe(o => this.order = o);
    }
}
