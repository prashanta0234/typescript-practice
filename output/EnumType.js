"use strict";
var Abc;
(function (Abc) {
    Abc[Abc["one"] = 1] = "one";
    Abc[Abc["two"] = 2] = "two";
    Abc[Abc["three"] = 3] = "three";
})(Abc || (Abc = {}));
const fun = (a, b, c) => {
    return ((a === Abc.one &&
        b === Abc.two &&
        c === Abc.three &&
        "Congrates All is correct!") ||
        (a === Abc.one && b === Abc.two && "Congrates one two ") ||
        (b === Abc.two && c === Abc.three && "Congrates Two three") ||
        (a === Abc.one && c === Abc.three && "Congrates one three"));
};
console.log(fun(1, 2, 7));
