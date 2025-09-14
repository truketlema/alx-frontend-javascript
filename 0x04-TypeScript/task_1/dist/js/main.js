// Example usage for Task 1 & 2
var teacher3 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
};
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(teacher3);
console.log(director1);
function printTeacher(firstName, lastName) {
    var firstLetter = firstName[0];
    return "".concat(firstLetter, ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe")); // Output: J. Doe
//# sourceMappingURL=main.js.map