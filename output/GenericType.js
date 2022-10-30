"use strict";
const data = (obj) => {
    return obj;
};
const passValue = data({
    name: "Pro",
    id: 36,
});
console.log(passValue.id);
