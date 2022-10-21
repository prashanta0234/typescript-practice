type NS = number | string;

type user = {
  name: string;
  id: NS;
  phone: number;
};

const test = (a: NS) => {
  console.log(a);
};

const register = (user: NS, student: user) => {
  console.log("user name is:", user);

  console.log(student.name);
  console.log(student.id);
  console.log(student.phone);
};

test("I am pro shanto!");
test(51);

register(1314, { name: "pro", id: 2022, phone: 1754540234 });
