import { OrderItem } from '../order/orderItem';
import { Customer } from '../customer/customer';
import { Product } from '../product/product';

export class Order {
    id: number;
    orderDate: Date = new Date();
    orderNumber: string;
    customer: Customer;
    totalAmount: number;
    subTotal: number;
    orderItems: Array<OrderItem> = new Array <OrderItem>();
    products: Array<Product> = new Array<Product>();
}