import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ValuationsService = /** @class */ (function () {
    function ValuationsService(http) {
        this.http = http;
    }
    ValuationsService.prototype.getByProduct = function (objeto) {
        return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto);
    };
    ValuationsService.prototype.introValuation = function (objeto) {
        return this.http.post('http://localhost/proyecto9/core/Controllers/AssesController.php', objeto);
    };
    ValuationsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ValuationsService);
    return ValuationsService;
}());
export { ValuationsService };
//# sourceMappingURL=valuations.service.js.map