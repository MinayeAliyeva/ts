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
// //yeni class toretiyoruz
// class Employee extends Person {
//   //parent clasimin constructorunu super keywordu ile cagiririq
//   constructor(id: number, firstName: string, lastName: string) {
//     //parent clasimin constructorunu tetikliyorum
//     super(id, firstName, lastName);
//   }
// }
// let employee = new Employee(29, "Can", "Boz");
// console.log(employee.getFullName());
// // let personInfo = new Person(43, "Can", "Boz");
// // console.log(personInfo.id);
// class Circle {
//   static pi: number = 3.14;
//   pi = 3;
//   constructor(){
//     this.pi++
//     Circle.pi++
//   }
//   static hesabla(x: number) {
//     return this.pi * x * x;
//   }
// }
// let objem = new Circle();
// let objem2 = new Circle();
// let objem3 = new Circle();
// console.log("circle",Circle.pi);
// console.log("obj",objem.pi);
//abstract class
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name :" + this.name);
    };
    return Department;
}());
///
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Acounting and autuding") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Bbbbbb");
    };
    AccountingDepartment.prototype.generateReport = function () {
        console.log("generate");
    };
    return AccountingDepartment;
}(Department));
//referans verib new instansda 
var department;
department = new AccountingDepartment();
// let department = new AccountingDepartment();
//miras alddik accountingDepartment
department.printName();
department.printMeeting();
// department.generateReport();
