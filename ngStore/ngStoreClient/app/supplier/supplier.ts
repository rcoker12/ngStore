import { Product } from '../product/product';

export class Supplier {
    id: number;
    companyName: string;
    contactName: string;
    contactTitle?: any;
    city: string;
    country: string;
    phone: string;
    fax: string;
    products: Array<Product> = new Array<Product>();
    product: Product = new Product();
}
