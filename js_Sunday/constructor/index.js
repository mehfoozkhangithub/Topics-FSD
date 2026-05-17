const { user } = require('./data.json');
console.log(`🚀 ~ user:`, user);

class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

user.forEach((element) => {
  let c1 = new Person(element.name, element.age);
  console.log(`🚀 ~ c1:`, c1);
});

// common JS [import[name|default] / export[name|default] ] {work only in node environment}

// ES6 [import[name|default] / export[name|default] ] {both node | browser }
