import { OrderItem } from '../order/orderItem';

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    customerId: number;
    totalAmount: number;
    orderItems: Array<OrderItem> = new Array <OrderItem>();

    get subtotal(): number {
        var sum = 0;
        for (var i = 0; i < this.orderItems.length; i++) {
            sum += this.orderItems[i].unitPrice * this.orderItems[i].quantity;
        }
        console.log("subtotal: " + sum);
        return sum;
    };
}