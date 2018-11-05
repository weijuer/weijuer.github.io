class Ziyoo {
  constructor(type, name, callback) {
    this.type = type;
    this.name = name;
    this.callback = callback;
  }

  sayHi() {
    console.log(`My name is ${this.name} and my type is ${this.type}!`);
  }
}
