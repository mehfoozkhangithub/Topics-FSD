let objectValue = {
  name: 'mehfooz',
  age: 999,
  married: false,
  hobbies: ['coc', 'pub-g', 'god of war'],
};

let ans = Object.hasOwn(objectValue, ['name']);

let ans2 = objectValue.hasOwnProperty(['name']);
// console.log('🚀 ~ ans2:', ans2);
// console.log('🚀 ~ ans:', ans);

// . notation
console.log(objectValue.name);

// [ ] notation
console.log(objectValue['name']);

// array methods

// at

let arr = [8, 12, 5, 66, 99];

let value = 10;

//?  with inbuild method
// const ans3 = `this is the index | position ${value}  is beside on the array is ${arr.at(value)}`;
// console.log('🚀 ~ ans3:', ans3);

//* without inbuild method
function myAtMethod(arr, indexValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[indexValue] !== undefined) {
      return arr[indexValue];
    }
    return undefined;
  }
}

let ans4 = myAtMethod(arr, value);
// console.log('🚀 ~ ans4:', ans4);

// concat method

let arr2 = [100, 111, 198, 987, 639];

let arr3 = ['100', '111', '198', '987', 639];

// let ans5 = arr.concat(arr2);

let ans5 = [...arr, ...arr2];

// console.log('🚀 ~ ans5:', ans5);

// console.log('🚀 ~ ans5:', ans5.flat());

function myConcat(...arg) {
  let myArr = [];

  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === 'object') {
      for (let j = 0; j < arg[i].length; j++) {
        myArr.push(arg[i][j]);
      }
    } else {
      myArr.push(arg[i]);
    }
  }

  return myArr;
}
let ans6 = myConcat(arr, arr2, arr3);
// console.log('🚀 ~ ans6:', ans6);

// slice

let ans7 = arr2.slice(2);
// console.log('🚀 ~ arr2:', arr2);
// console.log('🚀 ~ ans7:', ans7);

let ans8 = arr3.splice(0, 4, 'mehfooz');
// console.log('🚀 ~ arr3:', arr3);

// console.log('🚀 ~ ans8:', ans8);

console.log(arr3.includes('mehfooz'));

console.log(arr3.join(''));

let arr4 = [
  'mango',
  'kiwi',
  'apple',
  'guava',
  'mango',
  'kiwi',
  'apple',
  'guava',
  'mango',
  'kiwi',
  'apple',
  'guava',
  'mango',
  'kiwi',
  'apple',
  'guava',
  'mango',
  'kiwi',
  'apple',
  'guava',
];

let map = {};

for (let i = 0; i < arr4.length; i++) {
  if (map[arr4[i]]) {
    map[arr4[i]] = map[arr4[i]] + 1;
    // mango:1+1
  } else {
    map[arr4[i]] = 1;
    // mango : 1
    // kiwi :1
  }
}
// console.log('🚀 ~ map:', map);

let ans9 = arr4.reduce((initialValue, currentValue) => {
  initialValue[currentValue] = (initialValue[currentValue] || 0) + 1;

  return initialValue;
}, map);
// console.log('🚀 ~ ans9:', ans9);

// math method

/* 

cbrt

sqrt

pow 

floor 

ceil

random

round

abs

trunct

*/

let number = 5;

let ans10 = Math.pow(number, 4);

let ans11 = Math.cbrt(ans10);
// console.log('🚀 ~ ans11:', Math.round(ans11));

let truncNumber = Math.trunc(ans11);
// console.log('🚀 ~ truncNumber:', truncNumber);

let number_1 = 10;

let ans12 = Math.floor(number_1);
let ans13 = Math.ceil(number_1);
console.log('🚀 ~ ans12:', ans12);
console.log('🚀 ~ ans13:', ans13);

let ans14 = Math.round(number_1);
console.log('🚀 ~ ans14:', ans14);

let randomValue = Math.round(Math.random(number_1) * 10);
console.log('🚀 ~ randomValue:', randomValue);
