import { Component, OnInit } from "@angular/core";

import { Product } from './product';
import { ProductService } from '../services/productService';
import { OrderService } from '../services/orderService';

@Component({
    selector: "product-list2",
    templateUrl: "productList2.component.html",
    styleUrls: [],
})
export class ProductList2 implements OnInit {

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
}
