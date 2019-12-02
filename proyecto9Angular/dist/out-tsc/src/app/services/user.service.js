import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { User } from '../models/user';
var UserService = /** @class */ (function () {
    function UserService(http, login) {
        //     this.user = new User();
        //     this.user.idUser = '';
        //     this.user.names = '';
        //     this.user.surname = '';
        //     this.user.email = '';
        //     this.user.idCountry = '';
        //     this.user.country = '';
        //     this.user.idCity = '';
        //     this.user.city = '';
        //     this.user.numberAsses = '';
        //     this.user.dataAdd = '';
        //     this.user.rol = '';
        //     this.user.login = '';
        //     this.user.level = '';
        //     this.user.action = '';
        //     this.user.token = '';
        this.http = http;
        this.login = login;
    }
    UserService.prototype.getByToken = function () {
        var user;
        user = new User();
        user = new User();
        user.idUser = '';
        user.names = '';
        user.surname = '';
        user.email = '';
        user.idCountry = '';
        user.country = '';
        user.idCity = '';
        user.city = '';
        user.numberAsses = '';
        user.dataAdd = '';
        user.rol = '';
        user.login = '';
        user.level = '';
        user.action = '';
        user.token = '';
        var url = 'http://localhost/proyecto9/core/Controllers/UserController.php';
        var token = this.login.getCookie('tokenLogin');
        console.log("getByToken user: " + token);
        user.token = token;
        user.action = 'getByToken';
        if (token.length > 3) {
            this.http.post(url, JSON.stringify(user)).subscribe(function (data) {
                user = data;
                return user;
            });
        }
        return user;
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, LoginService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map