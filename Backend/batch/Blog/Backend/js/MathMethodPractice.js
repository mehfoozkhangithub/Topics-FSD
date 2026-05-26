let number = 10;

const ans = Math.pow(number, 3);
// console.log('🚀 ~ ans:', ans);

/*
trunc

sqrt

creil

floor

round

random

*/

// reducer

let arr = [2, 5, 9, 10, 20, 11, 44, 22];

// function sum(array) {
//   let sum = 0;

//   for (let el of array) {
//     sum += el;
//   }
//   return sum;
// }

// const ans1 = sum(arr);
// console.log('🚀 ~ ans1:', ans1);

const arr2 = [
  'mehfooz',
  'suraj',
  'kashish',
  'shivam',
  'sneha',
  'suraj',
  'renee',
  'kashish',
  'shivam',
  'sneha',
  'suraj',
  'renee',
  'kashish',
  'shivam',
  'sneha',
];

let map = {};

for (let items of arr2) {
  if (map[items]) {
    map[items] = map[items] + 1;
  } else {
    map[items] = 1;
  }
}

// console.log('🚀 ~ map:', map);

let ans3 = arr2.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log('🚀 ~ ans3:', ans3);

// const ans2 = arr.reduce((initialValue, currentValue) => {
//   return (initialValue += currentValue);
// }, 0);
// console.log('🚀 ~ ans2:', ans2);
