/* 
forEach

map

filter

reduce

*/

let arr = [1, 2, 3, 4, 5];

// नक्शा

// let ans = arr.map((el) => {
//   console.log(el);
//   return el;
// });
// console.log('🚀 ~ ans:', ans);

Array.prototype.नक्शा = function (callBack) {
  console.log('🚀 ~ this:', this);
  let myArr = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      myArr[i] = callBack(this[i], i, this);
    }
  }
  console.log('🚀 ~ myArr:', myArr);

  return myArr;
};
let ans = arr.नक्शा((el) => {
  console.log(el);
  //   return el * 2;
});
console.log('🚀 ~ ans:', ans);

/* arr.forEach((el, i, arr) => {
  console.log('inbuild prototype', el, 'index', i, 'arrs', arr);
});

Array.prototype.प्रत्येक_के_लिए = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

arr.प्रत्येक_के_लिए((el, i, arrs) => {
  console.log('apna prototype', el, 'index', i, 'arrs', arrs);
});
 */
