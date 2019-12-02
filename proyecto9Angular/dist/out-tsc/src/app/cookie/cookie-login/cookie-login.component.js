import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
var CookieLoginComponent = /** @class */ (function () {
    function CookieLoginComponent(cookie) {
        this.cookie = cookie;
    }
    CookieLoginComponent.prototype.ngOnInit = function () {
    };
    CookieLoginComponent.prototype.setCookie = function (name, valor) {
        this.cookie.set(name, valor);
    };
    CookieLoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cookie-login',
            templateUrl: './cookie-login.component.html',
            styleUrls: ['./cookie-login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CookieService])
    ], CookieLoginComponent);
    return CookieLoginComponent;
}());
export { CookieLoginComponent };
//# sourceMappingURL=cookie-login.component.js.map