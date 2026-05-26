let array = [1, 2, 3, 4, 4];
let string = 'hello';
let object = {
  name1: 'hello',
};

console.log(array);
console.log(string);
console.log(object);

let ans = array.find((el) => el === 3);
console.log('🚀 ~ ans:', ans);

console.log('🚀 ~ hasOwnProperty :', object.hasOwnProperty('name'));
console.log('🚀 ~ hasOwn:', Object.hasOwn(object, 'name'));

let num = 'manish';

let newArr = array.fill(num, 1, 3);
console.log('🚀 ~ newArr:', newArr);

let value = string.split('');
console.log('🚀 ~ value:', value);

let val = ['mehf', 'ooz', ' khan'];

let ans3 = val.join('');
console.log('🚀 ~ ans3:', ans3);

// push

let arr1 = [1, 2];

arr1.push(3, 'mehfooz', 6);

Array.prototype.dhakelo = function (...value) {
  console.log('🚀 ~ value:', value);
  let index = this.length;
  this[index] = value;
};

arr1.dhakelo(7, 8, 9);

console.log('🚀 ~ arr1:', arr1);

// arr1.pop(3);

// console.log('🚀 ~ arr1:', arr1);

Array.prototype.nikalo = function () {
  let index = this.length - 1;

  delete this[index];

  this.length = index;
};

arr1.nikalo();

let [a, b, ...rest] = arr1;
console.log('🚀 ~ rest:', rest);
console.log('🚀 ~ b:', b);
console.log('🚀 ~ a:', a);
