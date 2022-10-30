const data = <T>(obj: T) => {
  return obj;
};

const passValue = data({
  name: "Pro",
  id: 36,
});

console.log(passValue.id);

// generic class

class parentClass<T> {
  data: T[] = [];

  set(a: T) {
    return this.data.push(a);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item));
  }
}

const one = new parentClass();
one.set(10);
one.set("Pro");
one.set(36);
one.remove(36);
console.log(one);
