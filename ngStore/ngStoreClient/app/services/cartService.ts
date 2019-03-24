import { Injectable } from "@angular/core";
import { Order } from '../order/order';
import { OrderService } from './orderService';

@Injectable()
export class CartService {

    constructor(public orderService: OrderService) {
        console.log("Creating cart service");
    }
}
