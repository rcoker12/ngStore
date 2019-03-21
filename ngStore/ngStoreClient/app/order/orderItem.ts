import { Product } from '../product/product';
import { Order } from '../order/order';

export interface OrderItem {
    id: number;
    order: Order;
    productId: Product;
    unitPrice: number;
    quantity: number;
}