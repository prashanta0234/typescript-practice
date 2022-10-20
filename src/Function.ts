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
