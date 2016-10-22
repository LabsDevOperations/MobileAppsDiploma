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
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
/*
@Component({
  selector: 'my-app',
  template: '<h1>{{user.id}}</h1><br />' +
        '<h2>{{user.name}}</h2><br />' +
        '<h2>{{user.address}}</h2><br />' +
        '<h2>{{user.phone}}</h2><br />'
})
*/
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Mi agenda";
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selected = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/user.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var USERS = [
    {
        id: 1,
        name: "Emilio Calapiña",
        address: "Av siempre viva",
        phone: 6859688
    },
    {
        id: 2,
        name: "Agelica Uzurriaga",
        address: "Green Village",
        phone: 9856598
    },
    {
        id: 3,
        name: "Tomas Calapiña",
        address: "Av siempre viva",
        phone: 6859688
    }
];
//# sourceMappingURL=app.component.js.map