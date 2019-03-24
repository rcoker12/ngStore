import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { OrderService } from './orderService';

@Injectable()
export class CartService {

    public order: Order = new Order();

    constructor(public orderService: OrderService) {
    }
}
