var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(nid, name, age) {
        this._nid = nid;
        this._name = name;
        this._age = age;
    }
    Person.prototype.getnid = function () {
        return this._nid;
    };
    Person.prototype.getname = function () {
        return this._name;
    };
    Person.prototype.setname = function (newName) {
        this._name = newName;
    };
    Person.prototype.getage = function () {
        return this._age;
    };
    Person.prototype.setage = function (newAge) {
        this._age = newAge;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(nid, name, age) {
        _super.call(this, nid, name, age);
        this._id = nid;
        this._classes = [];
    }
    Student.prototype.getid = function () {
        return this._id;
    };
    Student.prototype.getClass = function (index) {
        return this._classes[index];
    };
    Student.prototype.addClass = function (classname) {
        this._classes[this._classes.length] = classname;
    };
    Student.prototype.getclasses = function () {
        return this._classes;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(nid, name, age) {
        _super.call(this, nid, name, age);
        this._id = nid;
    }
    Object.defineProperty(Teacher.prototype, "grades", {
        get: function () {
            return this._grades;
        },
        set: function (grades) {
            this._grades = grades;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.getclassrooms = function () {
        return this._classrooms;
    };
    return Teacher;
}(Person));
var student = new Student(1, 'Emilio', 32);
student.addClass('Mathematics');
student.addClass('Chemistry');
student.addClass('Language');
console.log(student);
var class1 = student.getClass(1);
console.log(class1);
var id1 = student.getid();
var teacher = new Teacher(1, 'Alicia', 41);
teacher.grades = ['1A', '1B'];
console.log(teacher);
