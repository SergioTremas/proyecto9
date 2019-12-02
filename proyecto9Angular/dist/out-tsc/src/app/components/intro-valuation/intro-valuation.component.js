import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ValuationsService } from '../../services/valuations.service';
var IntroValuationComponent = /** @class */ (function () {
    function IntroValuationComponent(valueService) {
        this.valueService = valueService;
    }
    IntroValuationComponent.prototype.insertValuations = function () {
        var objeto = {
            asses: "5",
            idProduct: "1",
            idUser: "3",
            opinion: "mola mucho",
            action: "insert"
        };
        this.valueService.introValuation(JSON.stringify(objeto)).subscribe(function (data) {
            console.log(data);
        });
    };
    IntroValuationComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], IntroValuationComponent.prototype, "id", void 0);
    IntroValuationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-intro-valuation',
            templateUrl: './intro-valuation.component.html',
            styleUrls: ['./intro-valuation.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ValuationsService])
    ], IntroValuationComponent);
    return IntroValuationComponent;
}());
export { IntroValuationComponent };
//# sourceMappingURL=intro-valuation.component.js.map