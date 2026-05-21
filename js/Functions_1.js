/* 
# Functions

- define [syntax]
- declaration [name]
- call [name]

***********

parameters
return
*/

function sumOfTwoNumber(a, b) {
  console.log(a + b); // 5
  return a + b;
}

const ans_1 = sumOfTwoNumber(2, 3);
// console.log('🚀 ~ ans_1:', ans_1);

const sumOfTwoNumber_1 = (a, b) => {
  console.log(a + b);
  return a + b;
};

const ans_2 = sumOfTwoNumber_1(4, 7);
// console.log('🚀 ~ ans_2:', ans_2);

let number_1 = +process.argv[2];
// console.log('🚀 ~ number_1:', typeof number_1);
let number_2 = +process.argv[3];
// console.log('🚀 ~ number_2:', typeof number_2);

// let number_1 = +prompt('enter you num_1');
// console.log('🚀 ~ number_1:', typeof number_1);
// let number_2 = +prompt('enter you num_2');
// console.log('🚀 ~ number_2:', typeof number_2);

const sumOfGivenIO = (val_1, val_2) => {
  return val_1 + val_2;
};

const ans_3 = sumOfGivenIO(number_1, number_2);
// console.log('🚀 ~ ans_3:', ans_3);

let person = undefined;

if (person === true) {
  console.log('hello');
} else if (person === null || person === undefined) {
  console.log('absent');
} else {
  console.log('bye');
}

let num_1 = +process.argv[2];
let num_2 = +process.argv[3];

function findGreaterNumber(n1, n2) {
  if (n1 < n2) {
    return `this is the greator num : ${n2}`;
  } else {
    return `this is the greator num : ${n1}`;
  }
}

const ans_great_num = findGreaterNumber(num_1, num_2);
console.log('🚀 ~ ans_great_num:', ans_great_num);
