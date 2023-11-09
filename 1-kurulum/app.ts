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

// interface Employee{
//   name:string,
//   code:number
// }
// let employee=<Employee>{}
// console.log(typeof(employee));
// employee.name="can"

// console.log(employee);

//condition loop

// let x: number = 25;
// let y: number = 25;

// // if (x > y) {
// //   console.log(`${x} buyukdur ${y}`);
// // } else if (x < y) {
// //   console.log(`${y} buyukdur ${x}`);
// // } else {
// // console.log("==");

// // }

// x > y ? console.log("x>y") : console.log("x<y");

// let day: number = 22;
// switch (day) {
//   case 0:
//     console.log("bazar");
//     break;
//   case 1:
//     console.log("cuma");
//     break;
//   case 2:
//     console.log("sali");
//     break;
//   case 3:
//     console.log("cersembe");
//     break;
//   case 4:
//     console.log("cuma");
//     break;
//   case 5:
//     console.log("bazar");
//     break;
//   case 6:
//     console.log("pazartesi");
//     break;
//     default:console.log("def");
//     break;

// }

// for (let i = 0; i < 3; i++) {
//   console.log("i degeri ", i);
// }

// let arr=[10,20,30,40]
// for (let item in arr) {
// console.log(item);

// }
// let str="Minaya"
// for (let a of str){
//   console.log(a);

// }

let counter = 56;
// while (counter < 5) {
//   console.log(counter);
//   counter++;
//   if(counter==3) break
  
// }

do{
 console.log('calis',counter);
 counter++
} while(counter<3)
