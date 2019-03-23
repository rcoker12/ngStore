import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
var LoginService = /** @class */ (function () {
    function LoginService() {
        this.token = "";
        this.tokenExpiration = new Date();
    }
    Object.defineProperty(LoginService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    LoginService = tslib_1.__decorate([
        Injectable()
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=loginService.js.map