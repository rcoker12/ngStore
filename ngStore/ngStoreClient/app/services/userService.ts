import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

import { User } from '../user/user';

@Injectable()
export class UserService {

    public user: User;
    public users: User[] = [];

    constructor(private http: HttpClient) {

    }

    getUser(userId: string): Observable<boolean> {
        return this.http.get("/api/user/" + userId)
            .pipe(
                map((data: User) => {
                    this.user = data;
                    return true;
                }));
    }

    getUsers(): Observable<boolean> {
        return this.http.get("/api/users")
            .pipe(
                map((data: User[]) => {
                    this.users = data;
                    return true;
                }));
    }

    deleteUser(user): Observable<boolean> {
        return this.http.post("/api/user/delete", user)
            .pipe(
                map((response: User) => {
                    this.user = response;
                    return true;
                }));
    }
}
