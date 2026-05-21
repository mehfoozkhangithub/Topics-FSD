// Methods Encapsulation

class Account {
  #age; // private variable assign
  constructor(name, age) {
    ((this.name = name), (this.#age = age));
  }
  showData() {
    return `this is the private value name age ${this.#age}`;
  }
}

const p1 = new Account('mehfooz', 20);
console.log(`🚀 ~ p1:`, p1);
console.log(`🚀 ~ p1:`, p1.showData());
