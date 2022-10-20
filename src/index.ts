// ############################ ARRAY ##############################

// ................pre defined...............
let arr = ["ami", "tomar", "jamai"];

// valid push because initial type and push data types are same
arr.push("ki");

// unvalid push because initail type and push data types aren`t same, so it will show  error
// arr.push(5);
console.log(arr);

// mix array data type

let mix = [2, "yep", true];

// this request is allowed
mix.push(3);
// this request is allowed
mix.push("no");
// this request is allowed
mix.push(false);

// .............post defined....................

let arr1 = [];

// all types input in allowed because there is no inital data type
arr1.push(5, "hi", false, 0.55);

console.log(arr1);
