"use strict";
let Sarray = ["Akib", "Rakib", "Sakib"];
let PushedArray = ["karim", "jarim"];
// PushedArray.push(...Sarray);
// we can also use Object
const Obj1 = [
    {
        name: "Shanto",
        Id: 36,
    },
];
const newObj = Object.assign({}, Obj1);
console.log(PushedArray, Obj1);
// rest perameter
const addFun = (...number) => {
    return number.reduce((currentResult, CurrentValue) => {
        return currentResult + CurrentValue;
    }, 0);
};
console.log(addFun(1, 5, 3.2, 8, 7, 4.3));
