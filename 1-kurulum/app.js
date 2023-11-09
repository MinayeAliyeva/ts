//parent
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //deger atamasi icin
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
//yeni class toretiyoruz
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //parent clasimin constructorunu super keywordu ile cagiririq
    function Employee(id, firstName, lastName) {
        //parent clasimin constructorunu tetikliyorum
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Person));
var employee = new Employee(29, "Can", "Boz");
console.log(employee.getFullName());
// let personInfo = new Person(43, "Can", "Boz");
// console.log(personInfo.id);
var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        this.pi++;
        Circle.pi++;
    }
    Circle.hesabla = function (x) {
        return this.pi * x * x;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var objem = new Circle();
var objem2 = new Circle();
var objem3 = new Circle();
console.log("circle", Circle.pi);
console.log("obj", objem.pi);
