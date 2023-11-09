function add(a, b) {
    return a + b;
}
var sum = add(3, 5);
console.log(sum);
function bastir() {
    console.log("Can Boz");
}
bastir();
function birlesdir(name, sname) {
    if (sname === void 0) { sname = "Boz"; }
    return "".concat(name, "  ").concat(sname);
}
console.log(birlesdir('Minaya'));
function carpim(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
console.log(carpim(3, 4, 5));
//arrow
var carpim = function () { return console.log('jj'); };
carpim();
