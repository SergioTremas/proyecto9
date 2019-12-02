import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
var UserComponent = /** @class */ (function () {
    function UserComponent(servicePro) {
        this.servicePro = servicePro;
        this.servicePro.postExample();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map