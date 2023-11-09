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
//yeni class toretiyoruz 
class Employee extends Person {
  //parent clasimin constructorunu super keywordu ile cagiririq
  constructor(id: number, firstName: string, lastName: string) {
    //parent clasimin constructorunu tetikliyorum 
    super(id, firstName, lastName);
  }
}
let employee=new Employee(29,"Can","Boz")
console.log(employee.getFullName());

// let personInfo = new Person(43, "Can", "Boz");
// console.log(personInfo.id);
