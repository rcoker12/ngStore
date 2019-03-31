import { Component, OnInit } from "@angular/core";

import { Product } from './product';
import { ProductService } from '../services/productService';
import { OrderService } from '../services/orderService';

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: [],
})
export class ProductList implements OnInit {

    private title: string = "Products";
    public products: Product[] = [];

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
        this.orderService.addToOrder(product, quantity);
    }
}
