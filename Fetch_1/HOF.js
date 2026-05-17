let arr = [
  'mango',
  'kiwi',
  'orange',
  'bannana',
  'apple',
  'orange',
  'bannana',
  'apple',
  'orange',
  'bannana',
  'apple',
];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let key of arr) {
//   console.log(key);
// }

// for (let key in arr) {
//   console.log(arr[key]);
// }

/* 

ternary operator


condition ? true : false


*/

let ansMap = arr.map((element, index, array) => {
  return element === 'bannana';
  // ? [true, index, array[index]]
  // : [false, index, array[index]];
  // if (element === 'bannana') {
  //   return [true, index];
  // }else{
  // return [false, index];
  //}
});
console.log('🚀 ~ ansMap:', ansMap);

let ansFilter = arr.filter((el, i, array) => {
  return el !== 'bannana';
  //   console.log('🚀 ~ el,i,array:', el, i, array);
});
console.log('🚀 ~ ansFilter:', ansFilter);

let ansReduce = arr.reduce((obj, currValue) => {
  //   console.log('🚀 ~ obj, currValue:', obj, currValue);
  //   return obj;
  obj[currValue] = (obj[currValue] || 0) + 1;
  return obj;
}, {});
console.log('🚀 ~ ansReduce:', ansReduce);
