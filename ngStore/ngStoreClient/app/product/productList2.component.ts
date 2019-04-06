import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Product } from './product';
import { ProductService } from '../services/productService';

@Component({
    selector: "product-list2",
    templateUrl: "productList2.component.html",
    styleUrls: [],
})
export class ProductList2 implements OnInit {

    private title: string = "Products";
    private errorMessage: string = "";
    public products: Product[] = [];

    constructor(private productService: ProductService, private router: Router) {
    }

    ngOnInit() {
        this.productService.getProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.productService.products;
                }
            });

    }

    addProduct() {
        localStorage.setItem('productId', "0");
        this.router.navigate(["Product/0"]);
    }

    editProduct(product: Product) {
        localStorage.setItem('productId', JSON.stringify(product.id));
        this.router.navigate(["Product/" + product.id]);
    }

    deleteProduct(product: Product) {
        this.productService.deleteProduct(product)
            .subscribe(success => {
                if (success) {
                    this.products.forEach((s, index) => {
                        if (s === product) this.products.splice(index, 1);
                    });
                }
            }, err => this.errorMessage = "Failed to delete product");
    }
}
