import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(servicePro, router) {
        var _this = this;
        this.servicePro = servicePro;
        this.router = router;
        this.productos = [];
        this.servicePro.getProducts().subscribe(function (data) {
            console.log(data);
            _this.productos = data;
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent.prototype.singleProduct = function (id) {
        this.router.navigate(['singleProduct', id]);
        console.log("hola" + id);
    };
    ProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService, Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map