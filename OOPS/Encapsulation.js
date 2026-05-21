class Account {
  #url; // private vaiable define
  #age;
  constructor(name, url, age) {
    ((this.name = name), (this.#url = url), (this.#age = age));
  }
  get hideValue() {
    return this.#url;
  }
}

const p1 = new Account('mehfooz', 'http://img.com/men', 2000);
console.log(`🚀 ~ p1:`, p1.hideValue);
