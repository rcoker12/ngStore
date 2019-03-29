import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

    private token;
    private tokenExpiration;

    constructor(private http: HttpClient) {

    }

    public login(creds): Observable<boolean> {
        return this.http.post("/account/createtoken", creds)
            .pipe(
                map((response: any) => {
                    let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;
                    localStorage.setItem('token', JSON.stringify(this.token));
                    localStorage.setItem('tokenExpiration', JSON.stringify(this.tokenExpiration));
                    return true;
                }));
    }
}
