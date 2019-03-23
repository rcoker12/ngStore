import { Product } from '../product/product';
import { Order } from '../order/order';

export class OrderItem {
    id: number;
    order: Order;
    product: Product;
    unitPrice: number;
    quantity: number;
}