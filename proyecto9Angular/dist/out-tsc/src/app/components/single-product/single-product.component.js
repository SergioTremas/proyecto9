import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    SingleProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.service.getById(params['id']).subscribe(function (params) {
                _this.Product = params;
                console.log(params);
            });
        });
    };
    SingleProductComponent = tslib_1.__decorate([
        Component({
            selector: 'app-single-product',
            templateUrl: './single-product.component.html',
            styleUrls: ['./single-product.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ProductsService])
    ], SingleProductComponent);
    return SingleProductComponent;
}());
export { SingleProductComponent };
//# sourceMappingURL=single-product.component.js.map