import {Order } from '../order/order';

export class User {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isAdmin: boolean;
    orders: Array<Order> = new Array<Order>();
}
