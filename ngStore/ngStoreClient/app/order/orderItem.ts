import { Product } from '../product/product';
import { Order } from '../order/order';

export class OrderItem {
    id: number;
    orderId: number;
    product: Product;
    unitPrice: number;
    quantity: number;
}