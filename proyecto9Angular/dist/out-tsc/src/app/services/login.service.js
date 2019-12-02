import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { CookieService } from 'ngx-cookie-service';
var LoginService = /** @class */ (function () {
    function LoginService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = 'http://localhost/proyecto9/core/Controllers/LoginController.php';
    }
    LoginService.prototype.checklogin = function (login) {
        return this.http.post(this.url, login);
    };
    LoginService.prototype.setCookie = function (name, valor) {
        this.cookie.set(name, valor);
    };
    LoginService.prototype.getCookie = function (name) {
        return this.cookie.get(name);
    };
    LoginService.prototype.checkCookie = function (name) {
        this.cookie.check(name);
    };
    LoginService.prototype.deleteCookie = function (name) {
        var login = new Login();
        login.action = 'deleteToken';
        login.idLogin = '';
        login.email = '';
        login.pass = '';
        login.token = name;
        this.cookie.delete('tokenLogin');
        this.http.post(this.url, JSON.stringify(login)).subscribe();
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, CookieService])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map