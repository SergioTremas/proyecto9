import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ValuationsService } from '../../services/valuations.service';
import { Valuation1 } from '../../models/valuation1';
var ValuationsComponent = /** @class */ (function () {
    function ValuationsComponent(serviceValuations) {
        this.serviceValuations = serviceValuations;
        this.valuations = [];
        this.valuation = new Valuation1();
    }
    ValuationsComponent.prototype.ngOnInit = function () {
        this.getById(this.id);
        // console.log("hola");
    };
    ValuationsComponent.prototype.getById = function (idv) {
        //  let valuation = {
        var _this = this;
        //     action:"getByProduct",
        //     idProduct:idv,
        //     nameProduct:"",
        //     idUser:"",
        //     nameUser:"",
        //     asses:"",
        //     opinion:"",
        //     assesfirst:""
        //   }
        this.valuation.action = "getByProduct";
        this.valuation.idProduct = idv;
        this.valuation.nameProduct = "";
        this.valuation.idUser = "";
        this.valuation.nameUser = "";
        this.valuation.asses = "";
        this.valuation.opinion = "";
        this.valuation.assesfirst = "";
        //valuacion.accion="getByProduct";
        //valuacion.idProduct=idv;
        // console.log(valuation);
        this.serviceValuations.getByProduct(JSON.stringify(this.valuation)).subscribe(function (data) {
            _this.valuations = data;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ValuationsComponent.prototype, "id", void 0);
    ValuationsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-valuations',
            templateUrl: './valuations.component.html',
            styleUrls: ['./valuations.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ValuationsService])
    ], ValuationsComponent);
    return ValuationsComponent;
}());
export { ValuationsComponent };
//# sourceMappingURL=valuations.component.js.map