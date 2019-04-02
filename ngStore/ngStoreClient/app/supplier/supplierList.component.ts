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

    public suppliers: Supplier[] = [];

    constructor(private supplierService: SupplierService, private router: Router) {
    }

    ngOnInit() {
        this.supplierService.getSuppliers()
            .subscribe(success => {
                if (success) {
                    this.suppliers = this.supplierService.suppliers;
                }
            });

    }

    editSupplier(supplier: Supplier) {
        localStorage.setItem('supplierId', JSON.stringify(supplier.id));
        this.router.navigate(["Supplier/" + supplier.id]);
    }
}
