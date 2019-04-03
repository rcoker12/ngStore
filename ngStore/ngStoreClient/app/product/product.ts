import { Supplier } from '../supplier/supplier';

export class Product {
    id: number;
    productName: string;
    supplier: Supplier;
    unitPrice: number;
    package: string;
    isDiscontinued: boolean;
}
