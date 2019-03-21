import { Supplier } from '../supplier/supplier';

export interface Product {
    id: number;
    productName: string;
    supplier: Supplier;
    unitPrice: number;
    package: string;
    isDiscontinued: boolean;
}
