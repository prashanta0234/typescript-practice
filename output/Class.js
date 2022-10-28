"use strict";
class Student {
    constructor(a, b, c, d) {
        this.name = a;
        this.id = b;
        this.age = c;
        this.otherInfo = d;
    }
}
const student1 = new Student("pro", 30, 22, {
    dept: "Shanto",
    versity: "CSE",
    intake: 46,
});
console.log(student1);
