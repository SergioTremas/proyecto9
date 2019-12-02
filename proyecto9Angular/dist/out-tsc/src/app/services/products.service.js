import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        console.log("servicio listo para usar");
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name=0&description=0&photo=0&category=0&CCAA=0&action=getAll');
    };
    ProductsService.prototype.getByLetter = function (letter) {
        return this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=0&name=' + letter + '&description=0&photo=0&category=0&CCAA=0&action=letter');
    };
    ProductsService.prototype.postExample = function () {
        var DatosEnviar = {
            objeto: "sergio",
            edad: 36,
            ciudad: "cornella"
        };
        this.http.post('http://localhost/proyecto9/core/Controllers/objeto.php', JSON.stringify(DatosEnviar))
            .subscribe(function (data) {
            console.log("entra");
        });
        console.log('intro postExample');
    };
    ProductsService.prototype.getById = function (id) {
        console.log("dentro servicio");
        return this.http.get('http://localhost.org/proyecto9/core/Controllers/ProductController.php?id=' + id + '&name=&description=0&photo=0&category=0&CCAA=0&action=getById');
    };
    ProductsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map