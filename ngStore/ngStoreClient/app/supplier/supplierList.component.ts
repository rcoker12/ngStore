import { Component, OnInit } from "@angular/core";

import { Supplier } from './supplier';
import { SupplierService } from '../services/supplierService';

@Component({
    selector: "supplier-list",
    templateUrl: "supplierList.component.html",
    styleUrls: [],
})
export class SupplierList implements OnInit {

    public suppliers: Supplier[] = [];

    constructor(private supplierService: SupplierService) {
    }

    ngOnInit() {
        this.supplierService.getSuppliers()
            .subscribe(success => {
                if (success) {
                    this.suppliers = this.supplierService.suppliers;
                }
            });

    }
}
