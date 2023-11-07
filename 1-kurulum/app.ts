// type Person = {
//   userName: string;
//   age: number;
//   lastName: string;
// };

// var instructor: Person;
// instructor = {
//   userName: "Ban",
//   age: 23,
//   lastName: "tes",
// };

// console.log(instructor.age);

// //enam number
// enum Media {
//   Newspaper=1,
//   Newslatter,
//   Magazine,
//   Book,
// }

// console.log(Media.Magazine);

// //string enum
// enum PrintMedia{
//   Newspaper="News",
//   Newslatter="Newslatter",
//   Magazine="Magazine",
//   Box="box"
// }
// console.log(PrintMedia['Newspaper']);

// var code: string | number|boolean =12
// code=false
// console.log(code);

// var sumeThing:any="Helllo"
// sumeThing={
//   firs:"CAm"
// }
// var arr=["hhh",56]
// console.log(arr);

// sumeThing=["hhh"]
// console.log(sumeThing);

// function sayHello(): void {
//   let cance="Minaa"
//   return cance;
// }
// sayHello();
// let name = "Minaya";
// let sayac=0
// console.log(typeof(sayac));


// function increment(count:number):number{
// return count++
// }
// increment(6)


// // let a="ssomenj"
// // let b=45
// // a=b

// function sum(a:number,b:number):number{
// return a+b
// }
// let total:number=sum(10,14)


interface Employee{
  name:string,
  code:number
}
let employee=<Employee>{}
console.log(typeof(employee));
employee.name="can"

console.log(employee);
