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
var STUDENTS = [
    {
        id: 1,
        name: "Alice",
        classess: ["Mathematics", "Chemistry"],
        grade: 9.5
    },
    {
        id: 2,
        name: "Candance",
        classess: ["Sciences", "Language"],
        grade: 8.0
    },
    {
        id: 3,
        name: "Lucy",
        classess: ["Sports", "Mathematics"],
        grade: 7.5
    }
];
var TEACHERS = [
    {
        id: 1,
        name: "Ms. Rodriguez",
        rooms: ["1A", "2C"],
        studies: ["Phd"]
    },
    {
        id: 2,
        name: "Ms. Perez",
        rooms: ["1A"],
        studies: ["Phd"]
    },
    {
        id: 3,
        name: "Ms. Durango",
        rooms: ["2B", "3A"],
        studies: ["Phd"]
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "School";
        this.students = STUDENTS;
        this.teachers = TEACHERS;
    }
    AppComponent.prototype.onSelectStudent = function (student) {
        this.studentSelected = student;
    };
    AppComponent.prototype.onSelectTeacher = function (teacher) {
        this.teacherSelected = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map