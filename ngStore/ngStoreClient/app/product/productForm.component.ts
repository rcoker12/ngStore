import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Product } from './product';
import { ProductService } from '../services/productService';
import { SupplierService } from '../services/supplierService';
import { Supplier } from '../supplier/supplier';

@Component({
    selector: "product",
    templateUrl: "productForm.component.html",
    styleUrls: [],
})
export class ProductForm implements OnInit {

    private title: string;
    private errorMessage: string = "";
    private productId: string;
    private product: Product = new Product();
    private suppliers: Supplier[] = [];

    constructor(private productService: ProductService, private router: Router, private supplierService: SupplierService) {
        this.title = "Product";
        this.productId = localStorage.getItem("productId");
    }

    ngOnInit() {
        if (this.productId != "0") {
            this.productService.getProduct(this.productId)
                .subscribe(success => {
                    if (success) {
                        this.product = this.productService.product;
                    }
                });
        } else {
            this.product.supplier = new Supplier();
        }

        this.supplierService.getSuppliers()
            .subscribe(success => {
                if (success) {
                    this.suppliers = this.supplierService.suppliers;
                }
            });
    }

    onSupplierChange(event): void {
        this.supplierService.getSupplier(event.target.value)
            .subscribe(success => {
                if (success) {
                    this.product.supplier = this.supplierService.supplier;
                }
            });
    }

    onSubmit() {
        this.productService.saveProduct(this.product)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["Product/CmsProduct"]);
                }
            }, err => this.errorMessage = "Failed to save supplier");
    }
}
