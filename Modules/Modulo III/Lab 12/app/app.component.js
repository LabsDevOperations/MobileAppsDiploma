"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Ride = (function () {
    function Ride() {
    }
    return Ride;
}());
exports.Ride = Ride;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "TAXIMETER";
        this.taximeter = {
            units: 0,
            festives: 0,
            airport: 0,
            app: 0,
            default: 4100,
            total: 0
        };
    }
    AppComponent.prototype.onSelect = function (option, taximeter) {
        switch (option) {
            case "festives":
                if (taximeter.festives === 0)
                    taximeter.festives = 1900;
                break;
            case "airport":
                if (taximeter.airport === 0)
                    taximeter.airport = 3900;
                break;
            case "app":
                if (taximeter.app === 0)
                    taximeter.app = 1700;
                break;
            default:
                // code...
                break;
        }
    };
    AppComponent.prototype.onPay = function (taximeter) {
        if (taximeter.units <= 50)
            taximeter.total = taximeter.default;
        else {
            taximeter.total = ((taximeter.default * taximeter.units) / 50);
        }
        taximeter.total = taximeter.total + taximeter.festives + taximeter.airport + taximeter.app;
        this.selected = taximeter;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/taximeter.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map