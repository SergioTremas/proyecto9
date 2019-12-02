import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, login, user) {
        this.router = router;
        this.login = login;
        this.user = user;
        this.userModel = this.user.getByToken();
        console.log(this.userModel);
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.getProductsByLetter = function (letter) {
        this.router.navigate(['/byletter', letter]);
    };
    NavbarComponent.prototype.deleteToken = function () {
        console.log("logout");
        var token = this.login.getCookie('tokenLogin');
        this.login.deleteCookie(token);
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, LoginService, UserService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map