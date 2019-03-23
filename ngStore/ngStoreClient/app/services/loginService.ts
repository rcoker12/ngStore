import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    private token: string = "";
    private tokenExpiration: Date = new Date();

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration < new Date();
    }
}
