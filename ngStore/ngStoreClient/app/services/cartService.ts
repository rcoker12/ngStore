import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { Order } from '../order/order';

@Injectable()
export class CartService {

    public order: Order;
    private token: string = "";

    constructor(private http: HttpClient) {

        var o = localStorage.getItem('order');
        this.order = JSON.parse(o);
        if (this.order === null) {
            this.order = new Order();
        }

        var t = localStorage.getItem('token');
        this.token = JSON.parse(t);
    }

    public checkout() {
        return this.http.post("/api/orders", this.order, {
                headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
            })
            .pipe(
                map(response => {
                    this.order = new Order();
                    localStorage.setItem('order', JSON.stringify(this.order));
                    return true;
                }));
        
    }
}
