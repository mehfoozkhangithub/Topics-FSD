/* 
keyword

new -> create new object 

this -> point created object 


*/

// class Car {
//   constructor(name, age) {
//     ((this.name = name), (this.life = age));
//   }
// }

// function Car(name, age) {
//   ((this.name = name), (this.age = age));
// }

// let c1 = new Car('maruti', 18);
// console.log(`🚀 ~ c1:`, c1);

/* const raju = {
  name: 'minhaj',
  age: Infinity,
  married: true,
  hobbies: function () {
    console.log('inside the object', this.name);
  },
}; */
// raju.hobbies();
// console.log(`🚀 ~ raju:`, raju);

// console.log('global this', this);

// function name() {
//   console.log(this);
// }
// name();

// let person = {
//   name: 'xyz',
//   age: 15,
// };

/* const data = require('./data.json');

class Person {
  constructor(name, age) {
    ((this.name = name), (this.life = age));
  }
}

data.users.forEach((element, i) => {
  let p = new Person(element.name, element.age);
  console.log(`🚀 ~ p:`, p);
}); */

// call -> (,) , apply -> ([]), bind

let person1 = {
  name: 'manoj',
};

let person2 = {
  name: 'suresh',
};

let person3 = {
  name: 'manish',
};

function greet(age, married) {
  ((this.age = age), (this.married = married));
}

greet.call(person1, 25, true);
greet.apply(person2, [25, true]);
let ans = greet.bind(person3, 25, true);
// console.log(`🚀 ~ ans:`, ans());
ans();
console.log(`🚀 ~ person1:`, person1);
console.log(`🚀 ~ person2:`, person2);

console.log(`🚀 ~ person3:`, person3);
