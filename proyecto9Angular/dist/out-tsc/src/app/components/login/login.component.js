import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { AuthGuard } from '../../guard/auth.guard';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, auth) {
        this.service = service;
        this.auth = auth;
        console.log(this.getCookie());
        this.login = new Login();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogin = function (form) {
        var _this = this;
        this.login.action = 'check';
        this.login.token = '';
        if (form.invalid) {
            return;
        }
        this.service.checklogin(JSON.stringify(this.login)).subscribe(function (data) {
            _this.generarCookie(data);
            console.log(data);
        });
    };
    LoginComponent.prototype.generarCookie = function (valor) {
        this.service.setCookie('tokenLogin', valor);
    };
    LoginComponent.prototype.getCookie = function () {
        return this.service.getCookie('tokenLogin');
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, AuthGuard])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map