import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Supplier } from './supplier';
import { Product } from '../product/product';
import { SupplierService } from '../services/supplierService';
import { ProductService } from '../services/productService';

@Component({
    selector: "supplier",
    templateUrl: "supplierForm.component.html",
    styleUrls: [],
})
export class SupplierForm implements OnInit {

    private title: string;
    private errorMessage: string = "";
    private supplierId: string;
    public supplier: Supplier = new Supplier();
    public products: Product[] = [];
    public product: Product = new Product();

    constructor(private supplierService: SupplierService, private router: Router, private productService: ProductService) {
        this.title = "Supplier";
        this.supplierId = localStorage.getItem("supplierId");
    }

    ngOnInit() {
        if (this.supplierId != "0") {
            this.supplierService.getSupplier(this.supplierId)
                .subscribe(success => {
                    if (success) {
                        this.supplier = this.supplierService.supplier;
                    }
                });
            this.productService.getProducts()
                .subscribe(success => {
                    if (success) {
                        this.products = this.productService.products;
                    }
                });
        }
    }

    onSubmit() {
        console.log(this.supplier);
        this.supplierService.saveSupplier(this.supplier)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["Supplier/Suppliers"]);
                }
            }, err => this.errorMessage = "Failed to save supplier");
    }

    onProductChange(event): void {  
        var productId = event.target.value;
        console.log(productId);
        this.productService.getProduct(productId)
            .subscribe(success => {
                if (success) {
                    this.product = this.productService.product;
                }
            });
    }

    addProduct() {
        let p: Product = this.supplier.products.find(p => p.id == this.product.id);
        if (this.product.id === undefined) {
            this.product = this.products[0];
            this.supplier.products.push(this.product);
        }
        else if (!p) {
            console.log(this.product);
            this.supplier.products.push(this.product);
        }
        console.log(this.supplier.products);
    }
}
