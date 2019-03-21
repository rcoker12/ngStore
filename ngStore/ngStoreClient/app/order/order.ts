import { OrderItem } from '../order/orderItem';

export interface Order {
    "id": 1,
    "orderDate": "2012-07-04T00:00:00",
    "orderNumber": "542378",
    "customerId": 85,
    "totalAmount": 440,
    "orderItems": OrderItem[]
}