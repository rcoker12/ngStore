import { Component, OnInit } from "@angular/core";

import { Product } from './product';
import { ProductService } from '../services/productService';
import { OrderService } from '../services/orderService';
import { Order } from '../order/order';
import { OrderItem } from '../order/orderItem';

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: [],
})
export class ProductList implements OnInit {

    public products: Product[] = [];
    public order: Order = new Order();

    constructor(private productService: ProductService, private orderService: OrderService) {
    }

    ngOnInit() {
        this.productService.getProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.productService.products;
                }
            });

    }

    addProduct(product: Product, quantity: number) {

        let item: OrderItem = this.order.orderItems.find(i => i.product.id == product.id);

        if (item) {

            item.quantity++;

        } else {
            this.orderService.addToOrder(product, quantity);
        }
    }
}
