const value = undefined;

// switch (null) {
//   case true:
//     console.log('yes');
//     break;

//   case false:
//     console.log('no');
//     break;

//   default:
//     console.log('please select boolean value true/false');
// }

// function's

/* 


define
name-convention
call


*/

/* function sumOfValue(a, b, c) {
  console.log(a + b + c);
  return a + b + c;
}

console.log(sumOfValue(10, 7, 3));

const arrowFunc = (a, b, c) => {
  return a + b + c;
};

// const ans = arrowFunc(1, 2, 3);
console.log('🚀 ~ ans:', arrowFunc(1, 2, 3)); */

let num_1 = +process.argv[2];
let num_2 = +process.argv[3];
let operators = process.argv[4];
console.log('🚀 ~ operators:', operators);

function Calc(n1, n2, opts) {
  console.log('🚀 ~ opts:', opts);
  switch (opts) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;

    default:
      return null;
  }
}

const result = Calc(num_1, num_2, operators);

if (result === null) {
  console.log('please select correct operators!!');
} else {
  console.log(Math.abs(result));
}
