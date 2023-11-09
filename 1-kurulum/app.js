// function add(a:number,b:number){
//   return a+b;
// }
// let sum=add(3,5)
// console.log(sum);
// function bastir(): void {
//   console.log("Can Boz");
// }
// bastir();
function birlesdir(name, sname) {
    if (sname === void 0) { sname = "Boz"; }
    return "".concat(name, "  ").concat(sname);
}
console.log(birlesdir('Minaya'));
