"use strict";
// #################################### OBJECT ###################################
// typescript think that this  is the stracture of person object
const person = {
    name: "pro",
    age: 22,
    isSleeping: false,
};
// allowed
person.age = 20;
// not allowed
person.age = "nope";
// not allowed
person.computer = true;
console.log(person);
