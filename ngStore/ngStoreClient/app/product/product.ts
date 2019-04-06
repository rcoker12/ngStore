import { Supplier } from '../supplier/supplier';
import { OrderItem } from '../order/orderItem';

export class Product {
    id: number;
    productName: string;
    supplier: Supplier;
    unitPrice: number;
    package: string;
    isDiscontinued: boolean;
    orderItems: Array<OrderItem> = new Array<OrderItem>();
}
