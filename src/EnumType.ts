enum Abc {
  one = 1,
  two = 2,
  three = 3,
}

const fun = (a: number, b: number, c: number) => {
  return (
    (a === Abc.one &&
      b === Abc.two &&
      c === Abc.three &&
      "Congrates All is correct!") ||
    (a === Abc.one && b === Abc.two && "Congrates one two ") ||
    (b === Abc.two && c === Abc.three && "Congrates Two three") ||
    (a === Abc.one && c === Abc.three && "Congrates one three")
  );
};

console.log(fun(1, 2, 7));
