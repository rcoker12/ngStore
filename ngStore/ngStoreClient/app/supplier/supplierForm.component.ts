import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Supplier } from './supplier';
import { SupplierService } from '../services/supplierService';

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

    constructor(private supplierService: SupplierService, private router: Router) {
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
}
