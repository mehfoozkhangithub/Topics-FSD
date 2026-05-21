// what is scope

// global scope

let name = 'mehfooz';

let object = {
  // lexical scope || local scope
  name: 'khan',
};

function callName() {
  let name = 'khan sahab';
  console.log(this);
}
// callName();
// console.log(name);

// var let const

let age = 22;

let age1 = 'hello hello';

let age2 = false;

age = 'hello';

age = true;

// console.log('this is age', age);

let object1 = {
  name: 'xyz',
};

object1.age = 99;
object1.age = 199;

// console.log('🚀 ~ object1:', object1);

// var xyz = false;
const xyz = true;
// xyz = true;

// console.log(xyz);

for (let i = 0; i < 3; i++) {
  //   console.log('local', i); // 0 1 2
}

// console.log('global', i); // 0 | 1 2 | error | 0 1 2 | 1 2 | error | 3

// console.log(yyy);

// var yyy = 'something';

/// function

car();

function car() {
  let name = 'xyz';
  console.log('hehehe', name);
}

const ccc = 'ujc;kjwd ';

ccc = 'dbsbvsivb';
console.log('🚀 ~ ccc:', ccc);
