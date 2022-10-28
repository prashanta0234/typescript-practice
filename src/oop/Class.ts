class Student {
  name: string;
  id: number;
  age: number;
  otherInfo: {
    dept: string;
    versity: string;
    intake: number;
  };
  constructor(
    a: string,
    b: number,
    c: number,
    d: { dept: string; versity: string; intake: number }
  ) {
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
