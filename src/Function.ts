// ################################ function ###########################

// function perameter type not defined

// it will run perfactly but its showing a waring beacause we dont define function perameter type and it will accept any type of data

function less(a, b) {
  return a - b;
}
// allowed
console.log(less(10, 5));

// allowed
console.log(less("pro", 5));
// allowed
console.log(true, false);

// function perameter is defined

function add(a: number, b: number) {
  return a + b;
}

// allowed
console.log(add(5, 10));
// not allowed
console.log(add("pro", 10));
// not allowed
console.log(add("pro", false));

// ..........................return type..................................
const pro = (a: string, b: string): String => {
  return b + b;
};

// allowed
console.log(pro("pro", "shanto"));

// not allowed
console.log(pro(1, "pro"));
