import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
var ForLetterComponent = /** @class */ (function () {
    function ForLetterComponent(router, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.productos = [];
        this.router.params.subscribe(function (params) {
            //console.log(params['leter']);
            _this.getbyletter(params['leter']);
        });
    }
    ForLetterComponent.prototype.getbyletter = function (letra) {
        var _this = this;
        this.service.getByLetter(letra).subscribe(function (para) {
            _this.productos = para;
            console.log(para);
        });
    };
    ForLetterComponent.prototype.ngOnInit = function () {
    };
    ForLetterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-for-letter',
            templateUrl: './for-letter.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ProductsService])
    ], ForLetterComponent);
    return ForLetterComponent;
}());
export { ForLetterComponent };
//# sourceMappingURL=for-letter.component.js.map