import { Component, OnInit } from "@angular/core";

import { Product } from './product';
import { ProductService } from '../services/productService';
import { Supplier } from '../supplier/supplier';

@Component({
    selector: "product",
    templateUrl: "productForm.component.html",
    styleUrls: [],
})
export class ProductForm implements OnInit {

    private title: string;
    private productId: string;
    public product: Product = new Product();

    constructor(private productService: ProductService) {
        this.title = "Product";
        this.productId = localStorage.getItem("productId");

        //  Must do this for embedded classes in product
        this.product.supplier = new Supplier();
    }

    ngOnInit() {
        if (this.productId != "0") {
            this.productService.getProduct(this.productId)
                .subscribe(success => {
                    if (success) {
                        this.product = this.productService.product;
                        console.log(this.product);
                    }
                });
        }
    }
}
