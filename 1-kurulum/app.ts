function add(a:number,b:number){
  return a+b;

}
let sum=add(3,5)
console.log(sum);

function bastir(): void {
  console.log("Can Boz");
}
bastir();

function birlesdir(name:string,sname:string="Boz"):string{
 return `${name}  ${sname}`

}
console.log(birlesdir('Minaya'));

function carpim(a: number, b: number, c?: number) {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

console.log(carpim(3,4,5));

//arrow
let carpim=():void=>console.log('jj');
 

carpim()
