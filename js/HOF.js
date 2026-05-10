let arr = [
  'mango',
  'banana',
  'kiwi',
  'pineapple',
  'orange',
  'kiwi',
  'orange',
  'chiku',
  'pineapple',
  'mango',
  'banana',
  'kiwi',
];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let key in arr) {
//   console.log('🚀 ~ key:', key);
// }

let ansMap = arr.map(function (el, i, array) {
  return el === 'orange';
});
// console.log('🚀 ~ ansMap:', ansMap);

let ansFilter = arr.filter(function (el, i, array) {
  return el !== 'orange';
});
// console.log('🚀 ~ ansFilter:', ansFilter);

let hasMap = arr.reduce((initialValue, currentValue) => {
  //   if (initialValue[currentValue]) {
  //     initialValue[currentValue] = initialValue[currentValue] + 1;
  //   } else {
  //     initialValue[currentValue] = 1;
  //   }
  console.log(initialValue);
  console.log(currentValue);

  initialValue[currentValue] = (initialValue[currentValue] || 0) + 1;
  return initialValue;
}, {});

// console.log('🚀 ~ hasMap:', hasMap);

// js
let ansForEach = arr.forEach((el) => {
  // console.log("🚀 ~ el === 'orange':", el === 'orange');
  return el === 'orange';
});
// console.log('🚀 ~ ansForEach:', ansForEach);

let newArr = [10, 20, 40, 30, 50, 60];

let hasMap1 = newArr.reduce((initialValue, currentValue) => {
  console.log('🚀 ~ currentValue:', currentValue);
  console.log('🚀 ~ initialValue:', initialValue);
});

// console.log('🚀 ~ hasMap1:', hasMap1);
