"use strict";
const data = (obj) => {
    return obj;
};
const passValue = data({
    name: "Pro",
    id: 36,
});
console.log(passValue.id);
// generic class
class parentClass {
    constructor() {
        this.data = [];
    }
    set(a) {
        return this.data.push(a);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item));
    }
}
const one = new parentClass();
one.set(10);
one.set("Pro");
one.set(36);
one.remove(36);
console.log(one);
