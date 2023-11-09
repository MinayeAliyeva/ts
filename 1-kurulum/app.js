// //parent
function getFullName(person) {
    return "".concat(person.firstName, "  ").concat(person.lastName);
}
var person = {
    firstName: "Can",
    lastName: "boz",
};
console.log(getFullName(person));
