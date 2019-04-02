import { Component, OnInit } from "@angular/core";

import { Supplier } from './supplier';
import { SupplierService } from '../services/supplierService';

@Component({
    selector: "supplier",
    templateUrl: "supplierForm.component.html",
    styleUrls: [],
})
export class SupplierForm implements OnInit {

    private title: string;
    private supplierId: string;
    public supplier: Supplier = new Supplier();

    constructor(private supplierService: SupplierService) {
        this.title = "Supplier";
        this.supplierId = localStorage.getItem("supplierId");
    }

    ngOnInit() {
        this.supplierService.getSupplier(this.supplierId)
            .subscribe(success => {
                if (success) {
                    this.supplier = this.supplierService.supplier;
                }
            });
    }
}
