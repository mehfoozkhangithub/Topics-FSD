//# primitive[immutable](call-by-vlaue) and non-primitive[mutable](call-by-refrence) data types

/* 

number
string
boolean 
BigIn() 92236236n
Symbol('id') === Symbol('id') false

*/

var name = 'khan';

var name = 0;

// name[0] = 'm';

// console.log('🚀 ~ name[0]:', name[0]);

console.log('🚀 ~ name:', name);

// var val_1 = Symbol('id');
// console.log('🚀 ~ val_1:', val_1);
// var val_2 = Symbol('id');

// console.log(val_1 === val_2);

var arr = ['harsh', 'minhaj', 'manish', 'yasir'];
console.log('🚀 ~ arr:', arr);

arr[0] = 10;
console.log('🚀 ~ arr[0][0]:', arr[0]);
console.log('🚀 ~ arr:', arr);

let obj = {
  name: 'khan',
  age: 25,
};
// update
obj.name = 'minhaj';

// create
obj.hobbi = ['pub-g', 'coc', 'CS'];
obj.hello = 'unknown';

// delete

delete obj.hello;

// read
console.log('🚀 ~ obj', obj);

// hoisting

// let name_2 = 'khan';
//  name_2 = 'mehfooz';

let pass = 'jbvvbe';

pass = 'whueou';
console.log('🚀 ~ pass:', pass);

// console.log('🚀 ~ name_2:', name_2);

// defination
// nameing convention
// call

// sum();

// function sum() {
//   console.log(2 + 5);
// }
const sum = function () {
  return 5 + 2;
};
let val_44 = sum();
console.log('🚀 ~ val_44:', val_44);
let val_66 = sum();
console.log('🚀 ~ val_66:', val_66);

let ans55 = val_44 + val_66;
console.log('🚀 ~ ans55:', ans55);

let value = function () {
  console.log('hello');
};

value();

function sum1(length) {
  return function (breath) {
    return function (height) {
      return length * breath * height;
    };
  };
}

const sum2 = (length) => (breath) => (height) => {
  return length * breath * height;
};

const mmm = () => 'mehfooz';
console.log('🚀 ~ mmm:', mmm());

// let ans = sum1(5)(6)(7);
// console.log(ans);

let ans2 = sum2(5)(6)(7);
console.log('ans2', ans2);
