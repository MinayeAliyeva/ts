//parent

class Person {
  //initalise etme
  id: number;
  private firstName: string;
  readonly lastName: string;
  //deger atamasi icin
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
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
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name :" + this.name);
  }
  abstract generateReport():void
  abstract printMeeting(): void;
}

///
class AccountingDepartment extends Department {
  constructor() {
    super("Acounting and autuding");
  }
  printMeeting(): void {
    console.log("Bbbbbb");
  }

  generateReport(): void {
    console.log("generate");
  }
}
//referans verib new instansda 
let department: Department;
department = new AccountingDepartment();
// let department = new AccountingDepartment();
//miras alddik accountingDepartment
department.printName();
department.printMeeting();
// department.generateReport();
