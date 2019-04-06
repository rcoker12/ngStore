import { Order } from '../order/order';

export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    phone: string;
    orders: Array<Order> = new Array<Order>();
    order: Order = new Order();
}
