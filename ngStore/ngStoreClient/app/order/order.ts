import { OrderItem } from '../order/orderItem';
import { Customer } from '../customer/customer';

export class Order {
    id: number;
    orderDate: Date = new Date();
    orderNumber: string;
    customer: Customer;
    totalAmount: number;
    subTotal: number;
    orderItems: Array<OrderItem> = new Array <OrderItem>();
}