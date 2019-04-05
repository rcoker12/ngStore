import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Supplier } from './supplier';
import { SupplierService } from '../services/supplierService';

@Component({
    selector: "supplier-list",
    templateUrl: "supplierList.component.html",
    styleUrls: [],
})
export class SupplierList implements OnInit {

    private title: string;
    private errorMessage: string = "";
    public suppliers: Supplier[] = [];

    constructor(private supplierService: SupplierService, private router: Router) {
        this.title = "Suppliers";
    }

    ngOnInit() {
        this.supplierService.getSuppliers()
            .subscribe(success => {
                if (success) {
                    this.suppliers = this.supplierService.suppliers;
                }
            });

    }

    addSupplier() {
        localStorage.setItem('supplierId', "0");
        this.router.navigate(["Supplier/0"]);
    }

    editSupplier(supplier: Supplier) {
        localStorage.setItem('supplierId', JSON.stringify(supplier.id));
        this.router.navigate(["Supplier/" + supplier.id]);
    }

    deleteSupplier(supplier: Supplier) {
        this.supplierService.deleteSupplier(supplier)
            .subscribe(success => {
                if (success) {
                    this.suppliers.forEach((s, index) => {
                        if (s === supplier) this.suppliers.splice(index, 1);
                    });
                }
            }, err => this.errorMessage = "Failed to delete supplier");
    }
}
