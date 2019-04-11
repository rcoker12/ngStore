import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Order } from './order';
import { OrderService } from '../services/orderService';
import { Customer } from '../customer/customer';
import { Product } from '../product/product';
import { CustomerService } from '../services/customerService';
import { ProductService } from '../services/productService';
import { OrderItem } from './orderItem';

@Component({
    selector: "order",
    templateUrl: "orderForm.component.html",
    styleUrls: [],
})
export class OrderForm implements OnInit {

    private title: string;
    private errorMessage: string = "";
    private orderId: string;
    public order: Order = new Order();
    private customers: Customer[] = [];
    public products: Product[] = [];
    public product: Product = new Product();

    constructor(private orderService: OrderService, private router: Router, private customerService: CustomerService, private productService: ProductService) {
        this.title = "Order";
        this.orderId = localStorage.getItem("orderId");
    }

    ngOnInit() {
        if (this.orderId != "0") {
            this.orderService.getOrder(this.orderId)
                .subscribe(success => {
                    if (success) {
                        this.order = this.orderService.order;
                    }
                });
        } else {
            this.order.customer = new Customer();
        }

        this.customerService.getCustomers()
            .subscribe(success => {
                if (success) {
                    this.customers = this.customerService.customers;
                }
            });

        this.productService.getProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.productService.products;
                }
            });
    }

    onCustomerChange(event): void {
        console.log(event.target.value);
        this.customerService.getCustomer(event.target.value)
            .subscribe(success => {
                if (success) {
                    this.order.customer = this.customerService.customer;
                }
            });
    }

    onProductChange(event): void {
        var productId = event.target.value;
        this.productService.getProduct(productId)
            .subscribe(success => {
                if (success) {
                    this.product = this.productService.product;
                }
            });
    }

    addProduct() {

        //  Product not defined so take first product from dropdown
        if (this.product === undefined || this.product.id === undefined) {
            this.product = this.products[0];
        }
        let orderItem: OrderItem = this.order.orderItems.find(i => i.product.id == this.product.id);
        if (orderItem) {
            orderItem.quantity++;
            this.order.orderItems.forEach((i, index) => {
                if (i === orderItem) this.order.orderItems.splice(index, 1);
            });
        } else {
            
            orderItem = new OrderItem();
            orderItem.quantity = 1;
        }
        orderItem.product = this.product;
        orderItem.unitPrice = this.product.unitPrice;
        orderItem.orderId = this.order.id;
        this.order.orderItems.push(orderItem);
        this.getTotalAmount();
        console.log(this.order);
    }

    onSubmit() {
        this.orderService.saveOrder(this.order)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["Order/Orders"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }

    deleteItem(order: Order, item: OrderItem) {
        order.orderItem = item;
        this.orderService.deleteItem(order)
            .subscribe(success => {
                if (success) {
                    //  Removes item in typed array
                    this.order.orderItems.forEach((i, index) => {
                        if (i === item) this.order.orderItems.splice(index, 1);
                    });
                    this.getTotalAmount();
                }
            }, err => this.errorMessage = "Failed to delete order item");
    }

    getTotalAmount() {
        var sum = 0;
        for (var i = 0; i < this.order.orderItems.length; i++) {
            sum += this.order.orderItems[i].unitPrice * this.order.orderItems[i].quantity;
        }
        this.order.totalAmount = sum;
    };
}
