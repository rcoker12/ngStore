import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { User } from '../user/user';

@Injectable()
export class UserService {

    public users: User[] = [];

    constructor(private http: HttpClient) {

    }

    getUsers(): Observable<boolean> {
        return this.http.get("/api/users")
            .pipe(
                map((data: User[]) => {
                    this.users = data;
                    return true;
                }));
    }
}
