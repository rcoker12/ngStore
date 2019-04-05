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

    constructor(private supplierService: SupplierService, private router: Router, private productService: ProductService) {
        this.title = "Supplier";
        this.supplierId = localStorage.getItem("supplierId");
    }

    ngOnInit() {
        if (this.supplierId != "0") {
            this.getSupplier();
        }
        this.productService.getProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.productService.products;
                }
            });
    }

    getSupplier() {
        this.supplierService.getSupplier(this.supplierId)
            .subscribe(success => {
                if (success) {
                    this.supplier = this.supplierService.supplier;
                }
            });
    }

    onSubmit() {
        this.supplierService.saveSupplier(this.supplier)
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["Supplier/Suppliers"]);
                }
            }, err => this.errorMessage = "Failed to save supplier");
    }

    onProductChange(event): void {  
        var productId = event.target.value;
        this.productService.getProduct(productId)
            .subscribe(success => {
                if (success) {
                    this.supplier.product = this.productService.product;
                }
            });
    }

    addProduct() {
        let p: Product = this.supplier.products.find(p => p.id == this.supplier.product.id);
        if (this.supplier.product.id === undefined) {
            this.supplier.product = this.products[0];
            this.supplier.products.push(this.supplier.product);
        }
        else if (!p) {
            this.supplier.products.push(this.supplier.product);
        }
        console.log(this.supplier.products);
    }

    deleteProduct(supplier: Supplier, product: Product) {
        supplier.product = product;
        this.supplierService.deleteProduct(this.supplier)
            .subscribe(success => {
                if (success) {
                    //  Removes item in typed array
                    this.supplier.products.forEach((p, index) => {
                        if (p === product) this.supplier.products.splice(index, 1);
                    });                
                }
            }, err => this.errorMessage = "Failed to delete supplier product");
    }
}
