import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

    private token: string = "";
    private tokenExpiration: Date = new Date();

    constructor(private http: HttpClient) {

    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public login(creds): Observable<boolean> {
        return this.http.post("/account/createtoken", creds)
            .pipe(
                map((response: any) => {
                    let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;
                    localStorage.setItem('token', JSON.stringify(this.token));
                    return true;
                }));
    }
}
