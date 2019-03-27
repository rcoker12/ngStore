import { OrderItem } from '../order/orderItem';

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    customerId: number;
    totalAmount: number;
    subTotal: number;
    orderItems: Array<OrderItem> = new Array <OrderItem>();
}