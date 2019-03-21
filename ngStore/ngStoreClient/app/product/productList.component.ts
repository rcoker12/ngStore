import { Component, OnInit, AfterViewInit } from "@angular/core";

import { Product } from './product';
import { ProductService } from '../services/productService';

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: [],
})
export class ProductList implements OnInit {
    public products: Product[] = [];

    constructor(private dataService: ProductService) {
    }

    ngOnInit() {
        this.dataService.getProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.dataService.products;
                }
            });

    }
}
